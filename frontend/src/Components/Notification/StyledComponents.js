import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 5px;
  background-color: #333;
  width: 300px;
  max-width: 96%;
  padding: 10px 20px;
  border-radius: 10px;
  transform: scale(0);
  transform-origin: top right;
  transition: transform 300ms linear;

  &.show {
    transform: scale(1);
  }
`;

export const Message = styled.p`
  color: #ccc;
`;

export const Close = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: hsl(30, 100%, 50%);
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 3px 7px;
  cursor: pointer;
`;
