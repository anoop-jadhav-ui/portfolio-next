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
  loadProfileData: (profileData: ProfileData) => void;
}
type ProfileDataContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: ProfileDataContextType = {
  profileData: initialProfileData,
  isProfileDataLoaded: false,
  loadProfileData: (profileData: ProfileData) => undefined,
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

  const loadProfileData = async (profileData: ProfileData) => {
    // const profileData = await fetchProfileData();
    setProfileData(profileData);
    setIsProfileDataLoaded(true);
  };

  return (
    <ProfileDataContext.Provider
      value={{
        profileData,
        isProfileDataLoaded,
        loadProfileData,
      }}
    >
      {children}
    </ProfileDataContext.Provider>
  );
};
