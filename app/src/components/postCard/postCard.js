import styled from "styled-components/macro";

export const PostCardS = styled.div`
  display: flex;
  flex-direction: column;

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

  .header{    
    display: flex;
  }
  .date{
    /* align-self:flex-end; */
    margin-left: auto;
    margin-right:1rem;
    margin-top: 1rem;
    color:${(props) => props.theme.colors.date};
    font-size: 1.5rem;
    font-weight: 600;
  }
  .userName{
    color: ${(props) => props.theme.colors.title};
    margin-left: 2rem;
    margin-top: 1.2rem;
    font-size: 3rem;
  }
}
  .content{
    color:${(props) => props.theme.colors.text};
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
    overflow-x: hidden;
    font-size: 2rem;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #70E864;
    }
  }

  .delete{
    cursor: pointer;
    height: fit-content;
    margin: 0.8rem 0.5rem;
    background: transparent;
  }

  .heart{
    cursor: pointer;
    height: 40px;
    align-self: flex-end;
    margin-right: 2rem;
    margin-top: 3.5rem;

    @media (max-width: 970px) {
      .date{
        margin-left:1rem;
      }
      .delete{
        margin-right: 0.2rem;   
      }
    }
    
    @media (max-width: 281px) {
      max-width: 100%;
      margin-bottom: 3rem;

      ::placeholder,
      ::-webkit-input-placeholder {
          color: #70E864;
      }

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
