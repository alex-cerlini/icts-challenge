import { Input, InputLabel } from "@mui/material";
import { SignupItemProps } from "./type";
import * as Style from "./styles";
import { SignupEnum } from "../Signup/enum";

const SignupItem = ({ label, id, register }: SignupItemProps) => {
  const typeInput = [
    SignupEnum.address,
    SignupEnum.email,
    SignupEnum.fullName,
  ].includes(id)
    ? "text"
    : id === SignupEnum.birthDate
    ? "date"
    : "number";

  return (
    <Style.Container>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} {...register(id)} type={typeInput} />
    </Style.Container>
  );
};

export default SignupItem;
