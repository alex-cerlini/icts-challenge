import { render, screen } from "@testing-library/react";
import SignupItem from ".";
import { UseFormRegister } from "react-hook-form";
import { SignupEnum } from "../Signup/enum";
import { FormInputsProps } from "../Signup/type";

describe("SignupItem", () => {
  const register = jest.fn();
  const SignupString = "fullName";

  const renderSignupItem = () =>
    render(
      <SignupItem
        id={SignupEnum.fullName}
        label="Nome"
        register={register satisfies UseFormRegister<FormInputsProps>}
      />
    );
  it("Should render", () => {
    renderSignupItem();
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { baseElement } = renderSignupItem();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render label on screen", () => {
    renderSignupItem();
    const label = screen.getByText("Nome");
    expect(label).toBeInTheDocument();
  });

  it("Should have input with correct id", () => {
    renderSignupItem();
    const label = screen.getByRole("textbox");
    expect(label.getAttribute("id")).toBe(SignupString);
  });

  it("should have label with correct for (equal input id)", () => {
    renderSignupItem();
    const label = screen.getByTestId("label");
    expect(label.getAttribute("for")).toBe(SignupString);
  });
});
