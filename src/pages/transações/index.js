import React, { useState } from "react";
import { useHistorico } from "../context/context";
import { StyledContainer, StyledDeposito, StyledSaque } from "./styles";
export default function Transactions() {
  const [deposito, setDeposito] = useState(0);
  const [saque, setSaque] = useState(0);
  const { adicionarTransacao } = useHistorico();
  const [valorDeposito, setValorDeposito] = useState("");
  const [valorSaque, setValorSaque] = useState("");

  function depositar() {
    const depositoInput = parseFloat(valorDeposito);
    if (!isNaN(depositoInput) && depositoInput > 0) {
      setDeposito((prevDeposito) => prevDeposito + depositoInput);
      const novaTransacao = { tipo: "Depósito", valor: depositoInput };
      adicionarTransacao(novaTransacao);
      setValorDeposito(""); 
    } else {
      alert("Por favor, insira um valor válido para depósito.");
    }
  }

  function sacar() {
    const saqueInput = parseFloat(valorSaque);
    if (!isNaN(saqueInput) && saqueInput > 0 && saqueInput <= deposito) {
      setSaque((prevSaque) => prevSaque + saqueInput);
      const novaTransacao = { tipo: "Saque", valor: saqueInput };
      adicionarTransacao(novaTransacao);
      setValorSaque(""); 
    } else {
      alert("Valor de saque inválido ou excede o saldo disponível.");
    }
  }
  
  const saldoTotal = deposito - saque;
 

  return (
    <>
     <StyledContainer>
      
      <StyledDeposito>
        <h1>Depositar</h1>
        <input
          type="number"
          value={valorDeposito}
          onChange={(e) => setValorDeposito(e.target.value)}
          placeholder="Depósito"
        />
        <button onClick={depositar}>Depositar</button>
      </StyledDeposito>

      <StyledSaque>
        <h1>Sacar</h1>
        <input
          type="number"
          value={valorSaque}
          onChange={(e) => setValorSaque(e.target.value)}
          placeholder="Saque"
        />
        <button onClick={sacar}>Sacar</button>
      </StyledSaque>

  </StyledContainer>
    
  

  </>
  );
};
