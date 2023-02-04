import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

import { initialProfileData } from "../helpers/defaultValues";
import fetchProfileData from "../helpers/fetchProfileData";
import { ProfileData } from "../types/profileDataTypes";

interface ProfileDataContextType {
  profileData: ProfileData;
  isProfileDataLoaded: boolean;
}
type ProfileDataContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: ProfileDataContextType = {
  profileData: initialProfileData,
  isProfileDataLoaded: false,
};

const ProfileDataContext =
  createContext<ProfileDataContextType>(defaultGobalContext);
export const useProfileDataContext = () => useContext(ProfileDataContext);

export const ProfileDataContextProvider = ({
  children,
}: ProfileDataContextProps) => {
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);
  const [isProfileDataLoaded, setIsProfileDataLoaded] =
    useState<boolean>(false);

  useLayoutEffect(() => {
    (async () => {
      const fetchedProfileData = await fetchProfileData();
      setProfileData(fetchedProfileData);
      setIsProfileDataLoaded(true);
    })();
  }, []);

  return (
    <ProfileDataContext.Provider
      value={{
        profileData,
        isProfileDataLoaded,
      }}
    >
      {children}
    </ProfileDataContext.Provider>
  );
};
