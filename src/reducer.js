import { ACTIONS } from "./actions";

export default function reducer(state, action) {
  if (action.type === ACTIONS.SET_DATA) {
    return { ...state, items: action.payload.items };
  }
  if (action.type === ACTIONS.SET_LOADING_FALSE) {
    return { ...state, isLoading: false };
  }
  if (action.type === ACTIONS.SET_LOADING_TRUE) {
    return { ...state, isLoading: true };
  }
  if (action.type === ACTIONS.GET_TOTAL_AMOUNT) {
    let count = 0;
    state.items.forEach((item) => (count += item.amount));
    return { ...state, totalAmount: count };
  }
  if (action.type === ACTIONS.GET_TOTAL_PRICE) {
    let count = 0;
    state.items.forEach((item) => (count += Number(item.price) * item.amount));
    count = parseFloat(count.toFixed(2));
    return { ...state, totalPrice: count };
  }
  if (action.type === ACTIONS.CLEAR_ALL) {
    return { ...state, items: [] };
  }
  if (action.type === ACTIONS.REMOVE_ITEM) {
    const filteredItems = state.items.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, items: filteredItems };
  }
  if (action.type === ACTIONS.INCREASE) {
    const increasedItems = state.items.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, items: increasedItems };
  }
  if (action.type === ACTIONS.DECREASE) {
    const decreasedItems = state.items
      .map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return { ...state, items: decreasedItems };
  }
}
