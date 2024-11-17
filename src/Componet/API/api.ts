import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/auth",
});

export const googleAuth = (code: any) => api.get(`/google?code=${code}`);