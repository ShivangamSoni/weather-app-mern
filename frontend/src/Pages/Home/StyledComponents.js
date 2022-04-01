import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 50px;
  padding: 20px;
  width: 1000px;
  max-width: 94%;
  margin: 0 auto;

  @media screen and (max-width: 850px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Left = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80% 20%;
  min-height: 600px;
`;
