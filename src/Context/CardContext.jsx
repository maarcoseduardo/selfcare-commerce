import React, { createContext, useState, useContext, useEffect } from "react";

import { arrayProducts } from "../index"
const CardContext = createContext();

export function CardProvider({ children }) {
  const [card, setCard] = useState([]);
  
  useEffect(() => {
    setCard(arrayProducts);
  }, []);
  return (
    <CardContext.Provider
      value={{
        card,
        setCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);

  const { card, setCard } = context;

  return { card, setCard };
}
