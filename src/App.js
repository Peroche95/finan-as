import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Transactions from "./pages/transações";
import Historico from "./pages/historico";
import { HistoricoProvider } from "./pages/context/context"; 

export default function App() {
  return (
    <HistoricoProvider> 
      <Router>
      <Header />
      <Routes>
      <Route path="/" exaxt Component={Home}/>
      <Route path="/transactions" Component={Transactions} />
      <Route path="/historico" Component={Historico} /> 
      </Routes>
      <Footer />
      </Router>
    </HistoricoProvider>
  );
}
