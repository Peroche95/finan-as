import React from "react";
import { Link } from "react-router-dom";
import { StylizedHeader } from "./styles";
export default function Header(){

    return(
        <>
  <StylizedHeader>
           <h1>Finanças ML</h1>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/transactions">Transações</Link>
          </li>
          <li>
            <Link to="/historico">Histórico</Link>
          </li>
        </ul>
      
  </StylizedHeader>
        </>
    )
}