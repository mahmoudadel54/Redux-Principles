import { createStore } from "redux";

//import reducers
import cakeReducer from "./cakes/reducers/cakeReducer";

const store = createStore(cakeReducer);

export default store;
