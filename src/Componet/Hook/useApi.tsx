import axios, { AxiosRequestConfig } from "axios";
import React, { useState } from "react";

interface IAPI {
  url: string;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  data?: any;
  config?: AxiosRequestConfig;
}
const useApi = <T,>(props: IAPI) => {
  const { url, method = "GET", data, config } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<T | null>(null);
  const featchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let result;

      switch (method) {
        case "GET":
          result = await axios.get<T>(url, config);
          break;
        case "POST":
          result = await axios.post<T>(url, config);
          break;
        case "DELETE":
          result = await axios.delete<T>(url, config);
          break;
        case "PUT":
          result = await axios.put<T>(url, config);
          break;
        default:
          throw new Error(`unsport method ${method}`);
      }
      setResponse(result.data);
    } catch (error: any) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, featchData };
};

export default useApi;
