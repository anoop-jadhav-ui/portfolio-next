import { ProfileData } from "./../types/profileDataTypes";
import firebaseApp from "./firebaseApp";
import { getDatabase, ref, child, get } from "@firebase/database";
import testProfileData from "../data/testData.json";

export default async function fetchProfileData(): Promise<ProfileData> {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Loading local data. Skipping the api call.");
      return testProfileData as ProfileData;
    } else {
      console.log("Making an actual api call");
      const dbRef = ref(getDatabase(firebaseApp));
      const snapshot = await get(child(dbRef, "/"));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw "Api call failed.";
      }
    }
  } catch (err) {
    console.log(err);
    return testProfileData as ProfileData;
  }
}
