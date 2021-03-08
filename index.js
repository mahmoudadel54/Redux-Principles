//implement 2 state - multiple reducers

const createStore = require("redux").createStore;
const combineReducers = require("redux").combineReducers;
// action JS Object
const BUY_CAKE = "BUY_CAKE";

//action creater --> is a JS Function returns an action
const buyCakeActionCreater = () => {
  return {
    type: BUY_CAKE,
    info: "Buy one cake",
  };
};

const BUY_ICECREAM = "BUY_ICECREAM";

const buyIceCreameActionCreater = () => {
  return {
    type: BUY_ICECREAM,
    info: "Buy one ice cream",
  };
};

//initial state =-> JS Object
// const initState = {
//   noOfCake: 20,
// };

const initCakeState = {
  noOfCake: 10,
};

const initIceCreamState = {
  noOfIceCream: 10,
};

//reducer --> JS Function accepts prevState, action as arguments
//returns the new state
// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         noOfCake: state.noOfCake - 1,
//       };
//     default:
//       return state;
//   }
// };

//multiple reducers
//1- cake reducer
const cakeReducer = (state = initCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

//2- ice cream reducer
const iceCreamReducer = (state = initIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};

//combine reducers in root reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
//create store
const store = createStore(rootReducer);

// get the state
console.log(store.getState());

//get the updated state
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

//make an update to state
//invoke the action creater
store.dispatch(buyCakeActionCreater());
//or invoke direct action
store.dispatch(buyCakeActionCreater());
store.dispatch(buyIceCreameActionCreater());
store.dispatch(buyIceCreameActionCreater());

//to handle unsubscribe and prevent subscribe function to fire
unsubscribe();
