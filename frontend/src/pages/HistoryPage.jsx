import React, { useEffect, useState } from "react";
import { getHistory } from "../api";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function HistoryPage({ setResult, setFiles }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then((res) => setHistory(res.data));
  }, []);

  const loadDiff = (item) => {
  setResult({
    summary: item.summary,
    diff: item.diff,
  });

  setFiles({
    file1: item.file1_url || item.file1,
    file2: item.file2_url || item.file2,
  });
};

  return (
    <div>
      <h2>Previous Comparisons</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#90caf9" }}>File 1</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>File 2</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>Date</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={{ color: "#fff" }}>{item.file1_name}</TableCell>
              <TableCell sx={{ color: "#fff" }}>{item.file2_name}</TableCell>
              <TableCell sx={{ color: "#fff" }}>{new Date(item.created_at).toLocaleString()}</TableCell>
              <TableCell>
                <button onClick={() => loadDiff(item)}>View Diff</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
