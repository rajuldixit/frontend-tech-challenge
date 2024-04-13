import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const useAxios = () => {
  const [response, setResponse] = useState(new Array());
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000"
  });

  let controller = new AbortController();

  useEffect(() => {
    return () => {
      controller?.abort();
    };
  }, []);
  const fetchData = async ({
    url = "",
    method = "",
    data = {},
    params = {}
  }) => {
    setLoading(true);
    controller.abort();
    controller = new AbortController();
    try {
      const response = await axiosInstance({
        url,
        method,
        params,
        signal: controller.signal
      });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request has been cancelled ", error.message);
      } else {
        setErrorMessage("some error");
      }
    } finally {
      setLoading(false);
    }
  };
  return { response, errorMessage, loading, fetchData };
};

export default useAxios;
