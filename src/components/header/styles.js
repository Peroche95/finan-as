import styled from "styled-components";

export const StylizedHeader = styled.header`
  background-color: #f59d5d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 50px;
    font-size: 24px;
    color: black;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 50px;
    list-style-type: none;

    @media screen and (max-width: 768px) {
      margin-right: 20px;
    }
  }

  li {
    margin-right: 20px;

    @media screen and (max-width: 768px) {
      margin-right: 10px;
    }
  }

  li a {
    text-decoration: none;
    color: black;
    font-size: 18px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  li a:hover {
    text-decoration: underline;
  }
`;
