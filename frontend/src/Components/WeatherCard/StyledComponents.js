import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: ${({ horizontal }) => (horizontal ? "row wrap" : "column-reverse nowrap")};
  align-items: center;
  gap: 5px;
  position: relative;
`;

export const Toggle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  width: 35px;
  height: 12px;
  border: 1px solid #333;
  outline: none;
  background-color: transparent;
  border-radius: 100px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #e14b19;
    border-radius: 100%;
    transition: all 200ms linear;
  }

  &.active::after {
    background-color: #197de1;
    transform: translate(280%, -50%);
  }
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
