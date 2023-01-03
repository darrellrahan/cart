import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { ACTIONS } from "./actions";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider(prop) {
  const initialState = {
    isLoading: false,
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  };

  const [data, dispatch] = useReducer(reducer, initialState);

  async function fetchAPI() {
    dispatch({ type: ACTIONS.SET_LOADING_TRUE });
    const res = await fetch(
      "https://course-api.com/react-useReducer-cart-project"
    );
    const data = await res.json();
    dispatch({ type: ACTIONS.SET_LOADING_FALSE });
    dispatch({ type: ACTIONS.SET_DATA, payload: { items: data } });
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_TOTAL_PRICE });
    dispatch({ type: ACTIONS.GET_TOTAL_AMOUNT });
  }, [data.items]);

  const { children } = prop;

  return (
    <GlobalContext.Provider value={{ data, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
