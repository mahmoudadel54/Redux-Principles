//actions
import { BACK_CAKE, BUY_CAKE } from "../actions/cakeTypes";
const initCakeState = {
  noOfCakes: 10,
};
const cakeReducer = (state = initCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case BACK_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
