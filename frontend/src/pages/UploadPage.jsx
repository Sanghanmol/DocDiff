import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import { comparePDFs } from "../api";

export default function UploadPage({ setResult, setFiles }) {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleCompare = async () => {
    const res = await comparePDFs(file1, file2);
    setResult(res.data);
    setFiles({
      file1: URL.createObjectURL(file1),
      file2: URL.createObjectURL(file2),
    })
  };

  return (
    <div>
      <h2>Upload PDFs</h2>
      <FileUpload onChange={(e) => setFile1(e.target.files[0])} />
      <FileUpload onChange={(e) => setFile2(e.target.files[0])} />
      <button onClick={handleCompare} disabled={!file1 || !file2}>Compare</button>
    </div>
  );
}
