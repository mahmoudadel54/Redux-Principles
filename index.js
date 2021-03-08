const createStore = require("redux").createStore;

// action JS Object
const BUY_CAKE = "BUY_CAKE";

//action creater --> is a JS Function returns an action
const buyCakeActionCreater = () => {
  return {
    type: BUY_CAKE,
    info: "Buy one cake",
  };
};

//initial state =-> JS Object
const initState = {
  noOfCake: 20,
};

//reducer --> JS Function accepts prevState, action as arguments
//returns the new state
const reducer = (state = initState, action) => {
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

//create store
const store = createStore(reducer);

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
store.dispatch({ type: "BUY_CAKE" });

//to handle unsubscribe and prevent subscribe function to fire
unsubscribe();
