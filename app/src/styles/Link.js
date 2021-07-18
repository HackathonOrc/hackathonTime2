import styled from "styled-components";

export const Link = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: var(--green);
  text-decoration: underline;

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;
