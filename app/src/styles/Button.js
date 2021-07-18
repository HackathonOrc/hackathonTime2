import styled from "styled-components";

export const Button = styled.button`
  width: min(34rem, 70%);
  height: 5rem;
  background: none;
  border: 2px solid #6ae01a;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  font-weight: 400;
  color: #6ae01a;
  cursor: pointer;
  margin-top: 1rem;

  @media (max-width: 800px) {
    width: 35vw;
  }
`;
