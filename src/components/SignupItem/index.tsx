import { Input, InputLabel } from "@mui/material";
import { SignupItemProps } from "./type";
import * as Style from "./styles";
import { SignupEnum } from "../Signup/enum";
import { SignupItemTypeEnum } from "./enum";

const SignupItem = ({ label, id, register }: SignupItemProps) => {
  const typeInput = [
    SignupEnum.address,
    SignupEnum.email,
    SignupEnum.fullName,
  ].includes(id)
    ? SignupItemTypeEnum.text
    : id === SignupEnum.birthDate
    ? SignupItemTypeEnum.date
    : SignupItemTypeEnum.number;

  return (
    <Style.Container data-testid="container">
      <InputLabel htmlFor={id} role="label" data-testid="label">
        {label}
      </InputLabel>
      <Input id={id} {...register(id)} type={typeInput} />
    </Style.Container>
  );
};

export default SignupItem;
