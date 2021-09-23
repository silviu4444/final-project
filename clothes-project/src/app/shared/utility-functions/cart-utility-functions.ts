import { CartItem } from "../interfaces/interfaces";
import { CartState } from "../store/cart.reducer";

export const isAlreadyInCart = (item: CartItem, cartItems: CartState) => {
  const isInCart = cartItems.items.findIndex((element: CartItem) => {
    return (
      element.id === item.id &&
      element.memorySelected === item.memorySelected &&
      element.storageSelected === item.storageSelected &&
      element.colorSelected === item.colorSelected
    );
  });
  return isInCart;
};

export const updateState = (state: CartState, itemIndex: number, payload: CartItem) => {
  const updatedItems = state;
  const isInCart = itemIndex > -1;
  if (isInCart) {
    const item = { ...updatedItems.items[itemIndex] };
    item.numberOfItems++;
    updatedItems.items[itemIndex] = item;
  } else {
    updatedItems.items.push({ ...payload, numberOfItems: 1 });
  }
  return updatedItems.items;
};
