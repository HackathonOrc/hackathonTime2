import styled from "styled-components";

export const Button = styled.button`
  width: min(34rem, 70%);
  height: 5rem;
  background: var(--black-green);
  border: 2px solid var(--detail-green);
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  font-weight: 400;
  color: var(--white);
  cursor: pointer;
  margin-top: 1rem;

  @media (max-width: 800px) {
    width: 35vw;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: var(--white);
  width: 37.5vw;
  height: 83.4vh;
  border-radius: 1em;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 1em;
  padding-bottom: 1em;

  @media (max-width: 800px) {
    width: 60vw;
  }
`;

export const Link = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: var(--dark-green);
  text-decoration: underline;

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--dark-green);
  min-width: 100vw;
  min-height: 100vh;
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--black);

  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const TextInput = styled.input`
  width: 25vw;
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: var(--gray);
  border-bottom: 2px solid var(--gray);
  outline: none;
  background-color: transparent;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--gray);
  }

  @media (max-width: 800px) {
    font-size: 1.75em;
    width: 40vw;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2.5em;
  font-weight: 400;
  color: var(--black);
  margin-top: 0.8rem;

  @media (max-width: 800px) {
    font-size: 2.25em;
    margin-top: 0.5rem;
  }
`;
