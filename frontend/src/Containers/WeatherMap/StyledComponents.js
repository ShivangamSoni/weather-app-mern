import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
  padding: 10px;
  gap: 10px;

  & .leaflet-container,
  & .leaflet-pane {
    height: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 7px;
`;
