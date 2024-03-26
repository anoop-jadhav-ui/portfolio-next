import React, { useContext, useState } from "react";

interface LoaderContext {
  isLoading: boolean;
  setLoading: (newValue: boolean) => void;
}

const defaultLoadingState: Partial<LoaderContext> = {
  isLoading: true,
};

const LoaderContext = React.createContext(defaultLoadingState as LoaderContext);

interface LoaderContextProvider {
  children: React.ReactNode;
}

export const LoaderContextProvider = ({ children }: LoaderContextProvider) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
