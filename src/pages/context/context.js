import React, { createContext, useContext, useState } from "react";

const HistoricoContext = createContext();

export const HistoricoProvider = ({ children }) => {
  const [historico, setHistorico] = useState([]);

  const adicionarTransacao = (transacao) => {
    setHistorico((prevHistorico) => [...prevHistorico, transacao]);
  };

  return (
    <HistoricoContext.Provider value={{ historico, adicionarTransacao }}>
      {children}
    </HistoricoContext.Provider>
  );
};

export const useHistorico = () => useContext(HistoricoContext);
