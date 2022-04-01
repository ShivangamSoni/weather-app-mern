import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #333;
  padding: 10px;
`;

export const SearchField = styled.input`
  appearance: none;
  border: none;
  outline: none;
  width: 500px;
  max-width: 50%;
  padding: 0.5em 1em;
  background-color: hsl(0, 100%, 100%, 0.5);
  font-size: 14px;
  transition: all 300ms linear;

  &:focus {
    outline: 2px solid #197de1;
    background-color: hsl(0, 100%, 100%, 0.9);
  }
`;

export const SearchButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  padding: 0.5em 1em;
  background-color: hsl(0, 100%, 100%, 0.5);
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    background-color: hsl(0, 100%, 100%, 0.9);
  }
`;
