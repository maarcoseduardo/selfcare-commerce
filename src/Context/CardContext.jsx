import React, { createContext, useState, useContext, useEffect } from "react";

import { api } from "../Services/api";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [card, setCard] = useState([]);
  
  useEffect(() => {
    api.get("/").then((response) => setCard(response.data));
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
