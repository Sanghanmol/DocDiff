import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000/api" });

export const comparePDFs = (file1, file2) => {
  const formData = new FormData();
  formData.append("file1", file1);
  formData.append("file2", file2);
  return API.post("/compare/", formData);
};

export const getHistory = () => API.get("/history/");