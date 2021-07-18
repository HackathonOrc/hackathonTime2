import styled from "styled-components";

export const TextInput = styled.input`
  width: 25vw;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  font-weight: 700;
  color: rgba(161, 161, 161);
  border-bottom: 2px solid rgba(161, 161, 161);
  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(161, 161, 161);
  }

  @media (max-width: 800px) {
    font-size: 1.75em;
    width: 40vw;
  }
`;
