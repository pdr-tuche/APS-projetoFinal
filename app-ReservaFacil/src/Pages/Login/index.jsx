import { useState } from "react";
import { Toaster, toast } from "sonner";

import {
  ContainerLogin,
  InputField,
  Link,
  LoginForm,
  LogoTipo,
  QuestionRegister,
  SubmitButton,
} from "./style";

import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para enviar o formulário de login e verificar se está cadastrado
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "usuario@gmail.com" && password === "1234") {
      // Redirecionar para o Home
      navigate("/")
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
