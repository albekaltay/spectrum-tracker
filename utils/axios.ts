import axios from "axios";
// config
import { HOST_API } from "../config-global";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const endpoints = {
  spectrum: {
    status: "api/SpectrumStatus",
    action: "api/ActOnSpectrum",
    websocket: "api/SpectrumWS"
  },
};

