import React from "react";
import { useLocation } from "react-router-dom";

import {
  CabecalhoContainer,
  ItemMenu,
  MenuItens,
  LinkEstilizado,
  Logotipo,
  BarraMenu,
} from "./style";
import logo from "../../assets/img/logo.png";

export default function Cabecalho() {
  const location = useLocation();

  // Simulando o estado de login do usuário
  const isLoggedIn = true;

  return (
    <CabecalhoContainer>
      <LinkEstilizado to="/">
        <Logotipo src={logo} alt="Logotipo da Reserva Fácil" />
      </LinkEstilizado>
      <BarraMenu>
        <MenuItens>
          {isLoggedIn ? (
            <>
              <LinkEstilizado
                to="/MinhasReservas"
                active={location.pathname === "/MinhasReservas"}
              >
                <ItemMenu>Minhas Reservas</ItemMenu>
              </LinkEstilizado>
              <LinkEstilizado to="/login">
                <ItemMenu>Sair</ItemMenu>
              </LinkEstilizado>
            </>
          ) : (
            <>
              <LinkEstilizado to="/login">
                <ItemMenu>Entrar</ItemMenu>
              </LinkEstilizado>
              <LinkEstilizado to="/register">
                <ItemMenu>Cadastrar</ItemMenu>
              </LinkEstilizado>
            </>
          )}
        </MenuItens>
      </BarraMenu>
    </CabecalhoContainer>
  );
}
