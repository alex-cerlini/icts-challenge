import { styled, Box, BoxProps } from "@mui/material";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
