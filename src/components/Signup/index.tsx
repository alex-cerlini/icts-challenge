import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button } from "@mui/material";
import { FormInputsProps } from "./type";
import { fields } from "./data.mock";

import SignupItem from "../SignupItem";

import * as Style from "./styles";

const emailMask =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const schema = yup
  .object({
    fullName: yup.string().required(),
    address: yup.string().required(),
    phone: yup.number().max(99999999999).required(),
    email: yup
      .string()
      .matches(emailMask, "E-mail inválido")
      .required("Campo obrigatório"),
    birthDate: yup.date().required("Data é obrigatório").min(new Date(0)),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<FormInputsProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputsProps) => {
    data.fullName = data.fullName.replace(/[0-9]/g, "");
    console.log(data);
  };

  const handleReset = () => {
    resetField("address");
    resetField("birthDate");
    resetField("email");
    resetField("fullName");
    resetField("phone");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Style.Container>
        {fields?.map((field) => (
          <SignupItem
            id={field.id}
            label={field.label}
            register={register}
            key={field.id}
          />
        ))}
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginTop: 18,
          }}
        >
          <Button
            variant="contained"
            type="submit"
            onClick={handleReset}
            color="error"
          >
            Limpar
          </Button>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Box>
      </Style.Container>
    </form>
  );
};

export default Signup;
