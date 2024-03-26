// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { axiosMailServerInstance } from "helpers/axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    const { userEmail, userMessage, userName } = req.body;

    const mailserverResponse = await axiosMailServerInstance.post("/mail", {
      userEmail: userEmail,
      userMessage: userMessage,
      userName: userName,
    });

    res.status(200).json({ msg: mailserverResponse.data.msg });
  }
}
