import { BUY_ICECREAM, BACK_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const backIceCream = () => {
  return {
    type: BACK_ICECREAM,
  };
};
