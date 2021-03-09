import { BUY_ICECREAM, BACK_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

export const backIceCream = () => {
  return {
    type: BACK_ICECREAM,
  };
};
