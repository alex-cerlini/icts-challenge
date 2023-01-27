import { styled, Box, BoxProps } from "@mui/material";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.contrastText,
  width: 500,
  height: 500,
  borderRadius: "2rem",
}));

export const ButtonsContainer = styled(Box)<BoxProps>({
  display: "flex",
  justifyContent: "space-between",
  width: "50%",
  marginTop: 18,
});
