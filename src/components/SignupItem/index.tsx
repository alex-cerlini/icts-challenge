import { Input, InputLabel } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { SignupEnum } from "../Signup/enum";
import { IFormInputs } from "../Signup/type";

export type SignupItemProps = {
  label: string;
  id: SignupEnum;
  register: UseFormRegister<IFormInputs>;
};

const SignupItem = ({ label, id, register }: SignupItemProps) => {
  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} {...register(id)} />
    </>
  );
};

export default SignupItem;
