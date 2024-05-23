import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 850px){
    display: flex;
    flex-direction: column;
  }
`;
