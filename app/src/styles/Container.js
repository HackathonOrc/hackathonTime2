import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
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
