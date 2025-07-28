import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadPage from "./pages/UploadPage";
import HistoryPage from "./pages/HistoryPage";
import ComparePage from "./pages/ComparePage";

export default function App() {
  const [page, setPage] = useState("upload");
  const [result, setResult] = useState(null);
  const [files, setFiles] = useState({});

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      paddingTop: "40px" 
      }}>
      <Navbar setPage={setPage} />
      <main className="main">
        {page === "upload" && (
          <UploadPage setResult={setResult} setFiles={setFiles} />
        )}
        {page === "history" && <HistoryPage setResult={setResult} setFiles={setFiles} />}
        <ComparePage result={result} files={files} />
      </main>
      <Footer />
    </div>
  );
}
