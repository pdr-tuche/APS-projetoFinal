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

import logo from "../../assets/img/logo.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com o email e senha fornecidos
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <ContainerLogin>
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
