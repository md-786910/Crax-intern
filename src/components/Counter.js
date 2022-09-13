import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";

export function Counter() {
  // useSelect for fetch data
  //   useDispatch for create data and update data

  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="incrementByAmount value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
}
