import CompareViewer from "../components/CompareViewer";
import DiffTable from "../components/DiffTable";
import DiffNavigator from "../components/DiffNavigator";

export default function ComparePage({ result, files }) {
  const handleJump = (row) => {
    const el = document.getElementById(`diff-row-${row}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <h2 style={{ marginTop: "40px" }}>Comparison Results</h2>

      {files?.file1 && files?.file2 ? (
        <CompareViewer file1={files.file1} file2={files.file2} />
      ) : (
        <p>No PDFs selected yet.</p>
      )}

      {result ? (
        <>
          <DiffNavigator changes={result.diff.changes} onJump={(row) => {
            const el = document.getElementById(`diff-row-${row}`);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }} />
          <DiffTable summary={result.summary} diff={result.diff} />
        </>
      ) : (
        <p>No comparison data yet.</p>
      )}

      <a
        href="http://localhost:8000/api/download/"
        target="_blank"
        rel="noreferrer"
      >
        <button style={{ marginTop: "20px" }}>Download Excel Report</button>
      </a>
    </div>
  );
}