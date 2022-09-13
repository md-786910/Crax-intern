import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function MonthlyPayment() {
  const [balance, setBalance] = useState(0);

  const bal = useSelector((state) => state.balance.bal);

  // Sample chart data
  const payMonthly = (Number(balance) / 12).toFixed();
  const balanceData = [];
  for (let i = 0; i <= 12; i++) {
    balanceData.push({
      balance: balance - payMonthly * i,
      month: i,
    });
  }

  useEffect(() => {
    const totalBalance =
      bal &&
      bal.reduce(function (previousValue, currentValue) {
        return Number(previousValue) + Number(currentValue);
      }, 0);
    setBalance(totalBalance);

    // eslint-disable-next-line
  }, [bal]);

  return (
    <>
      <div className="monthPayment">
        <div className="initialBal">
          <h2>Initial Balance : {balance}</h2>
        </div>

        <div className="paymentMonthly">
          <label htmlFor="in">
            Monthly Balance
            <input type="text" name="mBal" id="in" value={payMonthly} />
          </label>
        </div>
        <hr />
        <div className="mBalGraph">
          <h3>Balance of accounts after a number of months</h3>
          <ResponsiveContainer aspect={2}>
            <LineChart
              data={balanceData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              width={500}
              height={300}
            >
              <CartesianGrid />
              <XAxis dataKey="month" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
              <Line dataKey="balance" stroke="black" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default MonthlyPayment;
