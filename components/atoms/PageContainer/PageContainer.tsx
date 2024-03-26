"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { Container, ContainerProps, useTheme } from "@mui/material";
import React from "react";

const DESKTOP_CONTAINER_MAX_WIDTH = "lg";
const MOBILE_CONTAINER_MAX_WIDTH = "sm";

type PageContainerProps = ContainerProps & {
  children: React.ReactNode;
};

const PageContainer = ({ children, ...otherProps }: PageContainerProps) => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  return (
    <Container
      {...otherProps}
      maxWidth={
        isMobile ? MOBILE_CONTAINER_MAX_WIDTH : DESKTOP_CONTAINER_MAX_WIDTH
      }
      sx={{
        ...otherProps.sx,
        [theme.breakpoints.down("sm")]: {
          px: 1,
        },
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
