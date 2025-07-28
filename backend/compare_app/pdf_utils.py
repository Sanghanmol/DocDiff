import os
import pdfplumber
import pandas as pd
import docx
import openpyxl

def extract_content(file_path, file_name):
    ext = os.path.splitext(file_name)[1].lower()

    rows = []
    if ext == ".pdf":
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    for line in text.split("\n"):
                        rows.append([line])

    elif ext == ".docx":
        doc = docx.Document(file_path)
        for para in doc.paragraphs:
            rows.append([para.text])

    elif ext in [".xls", ".xlsx"]:
        df = pd.read_excel(file_path)
        return df

    elif ext == ".txt":
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            for line in f:
                rows.append([line.strip()])

    return pd.DataFrame(rows)
