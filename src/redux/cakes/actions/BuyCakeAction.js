import { BUY_CAKE, BACK_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const backCake = () => {
  return {
    type: BACK_CAKE,
  };
};
