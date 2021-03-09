import { combineReducers } from "redux";
//import reducers
import cakeReducer from "./cakes/reducers/cakeReducer";
import iceCreamReducer from "./iceCream/reducers/iceCreamReducer";
import userReducer from "./users/reducers/userReducer";
//we know the reducer return state --> so this state from rootReducer will be like:
/*
{ 
    cake: {
        noOfCake: value
    },
    icecream:{
        noOfIceCream: value
    }
 }

*/
//thi is very important note during accessing the state in components
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  users: userReducer,
});

export default rootReducer;
