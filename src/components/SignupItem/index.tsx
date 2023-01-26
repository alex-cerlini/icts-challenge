import { Input, InputLabel } from "@mui/material";
import { SignupItemProps } from "./type";
import * as Style from "./styles";

const SignupItem = ({ label, id, register }: SignupItemProps) => {
  return (
    <Style.Container>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} {...register(id)} />
    </Style.Container>
  );
};

export default SignupItem;
