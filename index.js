//async actions implementation (API Calls)
const redux = require("redux");
const axios = require("axios").default;
//middlewares
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").default;

//create redux store function
const createStore = redux.createStore;

//initial State
const initState = {
  loading: false,
  users: [],
  error: "",
};

//actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creaters
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

//in case of fetching data
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

//in case of failure in fetching data
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// async action creator --> return a function
const fetchUsers = () => {
  return function (dispatch) {
    //make a dispatch fetchUserRequest
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // data -> res.data
        //make another dispatch fetchUserSuccess
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        //make final dispatch fetchUSersFailure
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

//create a store
const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
console.log("Init State", store.getState());
store.subscribe(() => console.log("Updated State", store.getState()));

//make dispatch for the async action creator
store.dispatch(fetchUsers());
