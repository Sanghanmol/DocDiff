from deepdiff import DeepDiff
import pandas as pd

def compare_dataframes(df1, df2):
    df1.columns = [str(c) for c in df1.columns]
    df2.columns = [str(c) for c in df2.columns]

    if df1.shape[1] > 1 or df2.shape[1] > 1:
        data1 = df1.to_dict("records")
        data2 = df2.to_dict("records")
    else:
        data1 = df1.iloc[:, 0].dropna().tolist()
        data2 = df2.iloc[:, 0].dropna().tolist()

    diff = DeepDiff(data1, data2, ignore_order=True)

    structured_changes = []

    if "values_changed" in diff:
        for key, change in diff["values_changed"].items():
            structured_changes.append(
                {
                    "location": key,
                    "old_value": change["old_value"],
                    "new_value": change["new_value"],
                    "row": int(key.split("[")[1].split("]")[0])
                    if "[" in key and "]" in key
                    else None,
                }
            )

    if "iterable_item_added" in diff:
        for key, val in diff["iterable_item_added"].items():
            structured_changes.append(
                {"location": key, "old_value": None, "new_value": val, "row": None}
            )

    if "iterable_item_removed" in diff:
        for key, val in diff["iterable_item_removed"].items():
            structured_changes.append(
                {"location": key, "old_value": val, "new_value": None, "row": None}
            )

    summary = {
        "added": len(diff.get("iterable_item_added", [])),
        "removed": len(diff.get("iterable_item_removed", [])),
        "changed": len(diff.get("values_changed", [])),
    }

    return summary, {"changes": structured_changes}
