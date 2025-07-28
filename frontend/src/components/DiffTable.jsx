import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function DiffTable({ summary, diff }) {
  return (
    <div>
      <h3 style={{ color: "#fff", marginTop: "40px" }}>Summary</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#90caf9" }}>Added</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>Removed</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>Changed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}>{summary?.added}</TableCell>
            <TableCell sx={{ color: "#fff" }}>{summary?.removed}</TableCell>
            <TableCell sx={{ color: "#fff" }}>{summary?.changed}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h3 style={{ color: "#fff", marginTop: "40px" }}>Detailed Changes</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#90caf9" }}>Row</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>Old Value</TableCell>
            <TableCell sx={{ color: "#90caf9" }}>New Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diff?.changes?.map((c, idx) => {
            const rowIndex =
              c.row ?? c.location?.match(/\[(\d+)\]/)?.[1] ?? idx;

            return (
              <TableRow key={idx} id={`diff-row-${rowIndex}`}>
                <TableCell sx={{ color: "#fff" }}>{rowIndex}</TableCell>
                <TableCell style={{ backgroundColor: "#f8d4d4" }}>
                  {c.old_value || "N/A"}
                </TableCell>
                <TableCell style={{ backgroundColor: "#d4f8d4" }}>
                  {c.new_value || "N/A"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
