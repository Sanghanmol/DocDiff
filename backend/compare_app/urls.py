from django.urls import path
from .views import compare_pdfs, download_diff, get_history

urlpatterns = [
    path("compare/", compare_pdfs, name="compare_pdfs"),
    path("download/", download_diff, name="download_diff"),
    path("history/", get_history, name="get_history"),
]
