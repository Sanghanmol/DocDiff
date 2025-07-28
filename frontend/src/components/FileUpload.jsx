export default function FileUpload({ onChange }) {
  return <input type="file" accept="application/pdf" onChange={onChange} />;
}
