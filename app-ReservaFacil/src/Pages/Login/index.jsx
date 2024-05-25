import { useState } from "react";
import {
  ContainerLogin,
  InputField,
  Link,
  LoginForm,
  LogoTipo,
  QuestionRegister,
  SubmitButton,
} from "./style";
import { Toaster, toast } from "sonner";

import logo from "../../assets/img/logo.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "usuario@example.com" && password === "123456") {
    } else {
      toast.error("Email ou senha incorretos.");
    }
  };

  return (
    <ContainerLogin>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Arial, sans-serif",
            gap: "12px",
            padding: "16px",
            fontSize: "14px",
          },
        }}
        position="top-center"
        richColors
      />
      <LogoTipo>
        <img src={logo} alt="Logo da Reserva Fácil" />
        <h1>Reserva Fácil</h1>
      </LogoTipo>
      <LoginForm onSubmit={handleSubmit}>
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
        <SubmitButton type="submit">Entrar</SubmitButton>
        <QuestionRegister>
          Já possui conta? <Link href="/register">Criar conta</Link>
        </QuestionRegister>
      </LoginForm>
    </ContainerLogin>
  );
}