import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function CompareViewer({ file1, file2 }) {
  const [numPages1, setNumPages1] = useState(null);
  const [numPages2, setNumPages2] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "40px",
        margin: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h3>Old PDF</h3>
        <Document file={file1} onLoadSuccess={({ numPages }) => setNumPages1(numPages)}>
          {Array.from(new Array(numPages1), (_, i) => (
            <Page key={i} pageNumber={i + 1} width={300} />
          ))}
        </Document>
      </div>

      <div style={{ textAlign: "center" }}>
        <h3>New PDF</h3>
        <Document file={file2} onLoadSuccess={({ numPages }) => setNumPages2(numPages)}>
          {Array.from(new Array(numPages2), (_, i) => (
            <Page key={i} pageNumber={i + 1} width={300} />
          ))}
        </Document>
      </div>
    </div>
  );
}
