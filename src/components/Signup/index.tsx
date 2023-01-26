import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@mui/material";
import { IFormInputs } from "./type";
import { fields } from "./data.mock";

import SignupItem from "../SignupItem";

import * as Style from "./styles";

const schema = yup
  .object({
    fullName: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    birthDate: yup.string().required(),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Style.Container>
        {fields?.map((field) => (
          <SignupItem id={field.id} label={field.label} register={register} />
        ))}

        <Input type="submit" />
      </Style.Container>
    </form>
  );
};

export default Signup;
