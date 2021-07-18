import styled from "styled-components/macro";

export const PostCardS = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-width: 1.5px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.detail};
  border-radius: 10px;
  min-height: 193px;
  max-width: 673px;
  height: fit-content;
  width: 90%;
  margin-bottom: 6rem;

  .userName {
    color: ${(props) => props.theme.colors.title};
    margin-left: 8rem;
    margin-top: 1.2rem;
    font-size: 3rem;
  }
  .content {
    color: ${(props) => props.theme.colors.text};
    margin-left: 8rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-weight: 400;
    font-size: 2rem;
  }

  @media (max-width: 845px) {
    max-width: 100%;

    .userName,
    .content {
      margin-left: 2rem;
    }
  }

  @media (max-width: 281px) {
    max-width: 100%;
    margin-bottom: 3rem;

    .userName {
      font-size: 1.8rem;
    }

    .content {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }

    .userName,
    .content {
      margin-left: 1.5rem;
    }
  }
`;
