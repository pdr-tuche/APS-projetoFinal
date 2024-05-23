import styled from "styled-components";

export const ContainerRegister = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
`;

export const LogoTipo = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;

  img {
    width: 64px;
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #003285;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #003285;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
