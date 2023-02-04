import fetchProfileData from "@/helpers/fetchProfileData";
import { ProfileData } from "@/types/profileDataTypes";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = ProfileData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const profileData = await fetchProfileData();
    res.status(200).json(profileData);
  }
}
