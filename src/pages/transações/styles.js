import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  > div + div {
    margin-left: 20px;
  }

  > div:hover {
    transform: scale(1.05); /* Aumenta o tamanho em 5% */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    > div + div {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const StyledDeposito = styled.div`
  box-shadow: 0px 0px 6px pink;
  border: solid 0.2px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  input {
    border: solid 0.2px;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 8px;
    font-size: 16px;
  }
  button {
    width: 60%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    background-color: #b6b6b6;
    margin-bottom: 8px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const StyledSaque = styled.div`
  box-shadow: 0px 0px 6px white;
  border: solid 0.2px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  input {
    border: solid 0.2px;
    border-radius: 8px;
    padding: 10px;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 16px;
  }
  button {
    width: 60%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    background-color: #a4a4a4;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
