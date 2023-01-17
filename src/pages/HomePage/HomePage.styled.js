import styled from 'styled-components';

export const HomeTitle = styled.p`
  max-width: 400px;
  padding-left: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
export const WrapperHomePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 40px;
  @media screen and (max-width: 550px) {
    padding: 25px;
  }
`;
