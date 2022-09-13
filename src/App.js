import React from "react";
import "./App.css";
import AccountBalance from "./components/AccountBalance";
import MonthlyPayment from "./components/MonthlyPayment";

function App() {
  return (
    <>
      <div className="App">
        <AccountBalance />
        <MonthlyPayment />
      </div>
    </>
  );
}

export default App;
