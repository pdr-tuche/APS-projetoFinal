import { useState } from "react";
import {
  ContainerRegister,
  InputField,
  LogoTipo,
  RegisterForm,
  SubmitButton,
} from "./style";

import logo from "../../assets/img/logo.png";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
    console.log("Confirmar Senha:", confirmPassword);
  };

  return (
    <ContainerRegister>
      <LogoTipo>
        <img src={logo} alt="Logo da Reserva Fácil" />
        <h1>Reserva Fácil</h1>
      </LogoTipo>
      <RegisterForm onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </RegisterForm>
    </ContainerRegister>
  );
}
