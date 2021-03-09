//actions
import { BUY_ICECREAM, BACK_ICECREAM } from "../actions/iceCreamTypes";
const initIceCreamState = {
  noOfIceCream: 20,
};
const iceCreamReducer = (state = initIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    case BACK_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream + 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
