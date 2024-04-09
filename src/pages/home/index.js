import React from "react";
import { useHistorico } from "../context/context";
import { StylesSaldo, StylesSaldoContainer } from "./styles";

export default function Home() {
  const { historico } = useHistorico();

  const saldoTotal = historico.reduce((acc, transacao) => {
    if (transacao.tipo === "Depósito") {
      return acc + transacao.valor;
    } else if (transacao.tipo === "Saque") {
      return acc - transacao.valor;
    }
    return acc;
  }, 0);

  return (
    <StylesSaldoContainer>
    <StylesSaldo>
      <h1>Conta</h1>
      <p>Saldo Total: {saldoTotal.toFixed(2)}</p>
    </StylesSaldo>
    </StylesSaldoContainer>
  );
}
