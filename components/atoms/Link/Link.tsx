import React from "react";
import { LinkProps, Link as MUILink, SxProps, Theme } from "@mui/material";
import NextLink from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  sx?: SxProps<Theme> | undefined;
} & LinkProps;

const Link = (props: Props) => {
  const { children, href, ...otherProps } = props;
  return (
    <MUILink {...otherProps} component={NextLink} href={href} prefetch>
      {children}
    </MUILink>
  );
};

export default Link;
