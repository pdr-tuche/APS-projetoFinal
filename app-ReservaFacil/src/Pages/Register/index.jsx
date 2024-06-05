import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import {
  ContainerRegister,
  InputField,
  LogoTipo,
  RegisterForm,
  SubmitButton,
} from "./style";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import { API_BASE_URL } from "../../api";

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }

    const userData = {
      email: email,
      password: password,
      name: "String",
      role: "Comum"
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users`,
        userData
      );

      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Erro no cadastro. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro na comunicação com o servidor.");
    }
  };

  return (
    <ContainerRegister>
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
