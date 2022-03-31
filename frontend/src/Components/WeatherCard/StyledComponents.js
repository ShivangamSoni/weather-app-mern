import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: ${({ horizontal }) => (horizontal ? "row wrap" : "column-reverse nowrap")};
  align-items: center;
  gap: 5px;
`;

export const Info = styled.div`
  flex: 4;
  display: flex;
  flex-flow: column nowrap;
`;

export const Field = styled.span`
  color: #7d7d7d;
  font-weight: 200;
`;

export const Icon = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
