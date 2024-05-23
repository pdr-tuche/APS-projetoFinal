import { Outlet } from "react-router-dom";
import Cabecalho from "../../Components/Cabecalho";
import styled from "styled-components";

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export function BasePages() {
  return (
    <>
      <Cabecalho />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
