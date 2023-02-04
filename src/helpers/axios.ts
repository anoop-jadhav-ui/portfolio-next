import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAIL_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default instance;
