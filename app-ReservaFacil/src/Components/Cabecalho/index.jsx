import React from "react";
import {
  CabecalhoContainer,
  ItemMenu,
  MenuItens,
  LinkEstilizado,
  Logotipo,
  BarraMenu,
} from "./style";
import logo from "../../assets/img/logo.png";
import { useLocation } from "react-router-dom";

export default function Cabecalho() {
  const location = useLocation();

  const isLoggedIn = true;

  return (
    <CabecalhoContainer>
      <LinkEstilizado to="/">
        <Logotipo src={logo} alt="Logotipo da Reserva Fácil" />
      </LinkEstilizado>
      <BarraMenu>
        <MenuItens>
          <LinkEstilizado to="/">
            <ItemMenu>Início</ItemMenu>
          </LinkEstilizado>
          {isLoggedIn ? (
            <>
              <LinkEstilizado
                to="/MinhasReservas"
                active={location.pathname === "/MinhasReservas"}
              >
                <ItemMenu>Minhas Reservas</ItemMenu>
              </LinkEstilizado>
              <LinkEstilizado to="">
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
