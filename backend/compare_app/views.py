import tempfile
import pandas as pd
import io
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .pdf_utils import extract_content
from .diff_engine import compare_dataframes
from .models import ComparisonHistory
from .serializers import CompareResponseSerializer, ComparisonHistorySerializer

last_diff = None

@api_view(["POST"])
def compare_pdfs(request):
    global last_diff

    try:
        if "file1" not in request.FILES or "file2" not in request.FILES:
            return Response({"error": "Both files are required."}, status=400)

        file1 = request.FILES["file1"]
        file2 = request.FILES["file2"]

        with tempfile.NamedTemporaryFile(delete=False) as f1, tempfile.NamedTemporaryFile(delete=False) as f2:
            f1.write(file1.read())
            f2.write(file2.read())

            df1 = extract_content(f1.name, file1.name)
            df2 = extract_content(f2.name, file2.name)

        if df1.empty or df2.empty:
            return Response(
                {"error": "Could not extract content from one or both files."},
                status=400,
            )

        summary, diff = compare_dataframes(df1, df2)
        last_diff = diff
        history = ComparisonHistory.objects.create(
            file1=file1,
            file2=file2,
            file1_name=file1.name,
            file2_name=file2.name,
            summary=summary,
            diff=diff,
        )

        serializer = CompareResponseSerializer({"summary": summary, "diff": diff})
        return Response(serializer.data)

    except Exception as e:
        import traceback
        print("Error:", traceback.format_exc())
        return Response({"error": str(e)}, status=500)

@api_view(["GET"])
def download_diff(request):
    from .models import ComparisonHistory
    import pandas as pd, io
    from django.http import FileResponse

    latest = ComparisonHistory.objects.order_by("-created_at").first()
    if not latest:
        return Response({"error": "No comparison result found."}, status=400)

    diff = latest.diff
    rows = [[c.get("row", ""), c.get("old_value", ""), c.get("new_value", "")] for c in diff["changes"]]
    df = pd.DataFrame(rows, columns=["Row", "Old Value", "New Value"])

    buf = io.BytesIO()
    df.to_excel(buf, index=False)
    buf.seek(0)

    return FileResponse(buf, as_attachment=True, filename="diff_report.xlsx")

@api_view(["GET"])
def get_history(request):
    history = ComparisonHistory.objects.order_by("-created_at")[:10]
    serializer = ComparisonHistorySerializer(history, many=True, context={"request": request}) 
    return Response(serializer.data)
