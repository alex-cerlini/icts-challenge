import { styled, Box, BoxProps } from "@mui/material";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  width: 500,
  height: 500,
  borderRadius: "2rem",
}));
