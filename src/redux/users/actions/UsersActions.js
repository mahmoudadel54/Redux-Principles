import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

//action creaters
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

//in case of fetching data
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

//in case of failure in fetching data
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//async fetch function is a spatial action creator that return action creator
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        let err = error.message;
        dispatch(fetchUsersFailure(err));
      });
  };
};
