import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (anotherMode, replace = false) => {
    setMode(anotherMode);
    if (!replace) {
      setHistory((prev) => [...prev, anotherMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      const hist = [...history];
      hist.pop();
      setMode(hist[hist.length - 1]);
      setHistory(hist);
    }
  };

  return { mode, transition, back };
}