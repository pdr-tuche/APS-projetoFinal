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

export function Register() {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificação se todos os campos estão preenchidos
    if (!email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    // Verificação se as senhas coincidem
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }

    toast.success("Cadastro realizado com sucesso!");

    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
      navigate("/login");
    }, 2000);
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
