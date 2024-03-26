"use client";

import { AlertColor } from "@mui/material";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AlertBannerContext {
  isBannerVisible: boolean;
  messageComponent: ReactNode;
  severity?: AlertColor;
  showBanner: (children: ReactNode, severity: AlertColor | undefined) => void;
  clearBanner: () => void;
}

const defaultAlertBannerState: AlertBannerContext = {
  isBannerVisible: false,
  messageComponent: "",
  severity: "info",
  showBanner: () => undefined,
  clearBanner: () => undefined,
};

const AlertBannerContext = createContext<AlertBannerContext>(
  defaultAlertBannerState,
);

export const AlertBannerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [messageComponent, setMessageComponent] = useState<ReactNode>(null);
  const [severity, setSeverity] = useState<AlertColor | undefined>("info");
  const [isBannerVisible, setToggleBannerVisibility] = useState(false);

  const showBanner = (
    messageComponent: ReactNode,
    severity: AlertColor | undefined,
  ) => {
    setToggleBannerVisibility(false);
    setMessageComponent(null);
    setSeverity(undefined);
    setTimeout(() => {
      setMessageComponent(messageComponent);
      setSeverity(severity);
      setToggleBannerVisibility(true);
    }, 0);
  };

  const clearBanner = () => {
    setToggleBannerVisibility(false);
    setMessageComponent(null);
    setSeverity(undefined);
  };

  return (
    <AlertBannerContext.Provider
      value={{
        isBannerVisible,
        messageComponent,
        severity,
        showBanner,
        clearBanner,
      }}
    >
      {children}
    </AlertBannerContext.Provider>
  );
};

export const useAlertBanner = () => useContext(AlertBannerContext);
