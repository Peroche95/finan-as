import styled from "styled-components"

export const StylesTitulo = styled.h1`
   text-align: center;
   margin-top: 50px;
`

export const TransacaoItem = styled.li`
  list-style-type: none;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 0 auto;
  line-height: 10px;

`;

export const TipoTransacao = styled.span`
  font-weight: bold;
  color: ${props => (props.$tipo === "Depósito" ? "#4caf50" : "#f44336")};
`;