import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBalance } from "../features/balance/balanceSlice";

function AccountBalance() {
  const [balance, setBalance] = useState(" ");

  const bal = useSelector((state) => state.balance.bal);

  const dispatch = useDispatch();

  const setBalanceBtn = (balance) => {
    if (!isNaN || balance === " ") {
      alert("Invalid balance");
      return;
    }
    dispatch(addBalance(parseInt(balance)));
    setBalance(" ");
  };

  return (
    <>
      <div className="AccountBalance">
        <div className="title">
          <h1>Accounts</h1>
        </div>

        <span>Count : {bal && bal.length}</span>

        <div className="addBalance">
          <label htmlFor="balance">
            Balance
            <input
              type="number"
              name="balance"
              id="balance"
              value={balance}
              onChange={(event) => setBalance(event.target.value)}
            />
          </label>

          <button onClick={() => setBalanceBtn(balance)}>submit</button>
        </div>
        <div className="trackBalance">
          {bal.length === 0 ? (
            <h3>No Balance</h3>
          ) : (
            bal &&
            bal.map((balance, index) => {
              return <h3 key={index}>Balance : {balance}</h3>;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default AccountBalance;
