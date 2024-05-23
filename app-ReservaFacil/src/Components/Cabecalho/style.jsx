import styled from "styled-components";
import { Link } from "react-router-dom";

export const CabecalhoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 18px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Logotipo = styled.img`
  width: 42px;
`;

export const BarraMenu = styled.nav``;

export const MenuItens = styled.ul`
  display: flex;
  gap: 32px;
`;

export const ItemMenu = styled.li`
  font-weight: 600;
  color: #003285;

  &:hover {
    color: #9c9c9c;
  }
`;

export const LinkEstilizado = styled(Link)`
  text-decoration: none;

  & > ${ItemMenu} {
    color: ${(props) => (props.active ? "#9c9c9c" : "#003285")};

    &:hover {
      color: #9c9c9c;
    }
  }
`;
