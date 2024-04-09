import React from "react";
import { useHistorico } from "../context/context";
import { StylesTitulo, TipoTransacao, TransacaoItem } from "./styles";


export default function Historico() {
  const { historico } = useHistorico();

  return (
    <>
     <StylesTitulo>Histórico de Transações</StylesTitulo>
      <ul>
        {historico.map((transacao, index) => (
          <TransacaoItem key={index}>
            <TipoTransacao $tipo={transacao.tipo}>
              {transacao.tipo}:
            </TipoTransacao>{" "}
            {transacao.valor}
          </TransacaoItem>
        ))}
      </ul>
    </>
  );
}
