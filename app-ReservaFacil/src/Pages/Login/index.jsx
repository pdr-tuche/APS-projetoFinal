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
import axios from "axios";
import { API_BASE_URL } from "../../api";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/login`,
        userData
      );

      if (response.status === 200) {
        const id = response.data.id;

        localStorage.setItem("userID", id);

        navigate("/");
      } else {
        toast.error("Email ou senha incorretos.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro na comunicação com o servidor.");
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
