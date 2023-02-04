import axios from "axios";

const axiosMailServerInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAIL_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const axiosInstance = axios.create({
  baseURL: "/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export { axiosMailServerInstance, axiosInstance };
