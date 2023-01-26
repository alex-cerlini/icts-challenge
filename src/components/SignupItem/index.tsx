import { Input, InputLabel } from "@mui/material";
import { SignupItemProps } from "./type";

const SignupItem = ({ label, id, register }: SignupItemProps) => {
  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} {...register(id)} />
    </>
  );
};

export default SignupItem;
