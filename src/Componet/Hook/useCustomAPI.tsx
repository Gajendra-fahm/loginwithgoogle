import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface IAPIS {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  optionalparamers?: any;
  config?: AxiosRequestConfig;
}

const useCustomAPI = <T,>(props: IAPIS) => {
  const { url, method = "GET", optionalparamers, config } = props;
  const [response, SetResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const featchApi = async () => {
    setLoading(true);
    setError(null);
    try {
      let res;
      switch (method) {
        case "GET":
          res = await axios.get<T>(url, config);
          break;
        case "POST":
          res = await axios.post<T>(url, optionalparamers, config);
          break;
        case "PUT":
          res = await axios.put<T>(url, optionalparamers, config);
          break;
        case "DELETE":
          res = await axios.delete<T>(url, config);
          break;

        default:
          throw new Error(`unsport method ${method}`);
      }
      SetResponse(res?.data);
    } catch (error: any) {
      setError(error?.message || "something want wrong");
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, featchApi };
};

export default useCustomAPI;
