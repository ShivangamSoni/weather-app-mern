import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: #197de1;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
  text-decoration: 3px underline solid currentColor;
`;

export const ChoiceButton = styled.button`
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

  &:hover,
  &:disabled {
    color: #fff;
  }

  &:hover::after,
  &:disabled::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
