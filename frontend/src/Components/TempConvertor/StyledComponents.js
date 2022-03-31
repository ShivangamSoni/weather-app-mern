import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: 2px solid #197de1;
  background-color: transparent;
  color: #197de1;
  padding: 0.5em 1em;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  transition: color 300ms linear;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #197de1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms linear;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
