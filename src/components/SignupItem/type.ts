import { UseFormRegister } from "react-hook-form";
import { SignupEnum } from "../Signup/enum";
import { FormInputsProps } from "../Signup/type";

export type SignupItemProps = {
  label: string;
  id: SignupEnum;
  register: UseFormRegister<FormInputsProps>;
};
