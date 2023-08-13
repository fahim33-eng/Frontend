import { atom } from "recoil";
export const modalState = atom({
    key: 'modalState',
    default: false, 
  });
export const postIdState = atom({
  key: 'postIdState',
  default: "id", 
});

export const cartItems = atom({
    key: 'cartItems',
    default: [1, 2, 3, 4, 5, 6], 
  });