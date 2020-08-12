import * as types from "./index";
import axios from "axios";

const baseUrl = "https://choko-swift-foods-backend.herokuapp.com";

const loginUserLoading = () => ({
  type: types.LOGIN_LOADING,
});

const loginUserSuccessful = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const loginUserFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const loginUser = (existingUserData) => (dispatch) => {
  dispatch(loginUserLoading());
  axios
    .post(`${baseUrl}/login`, existingUserData)
    .then((response) => {
      dispatch(loginUserSuccessful(response));
    })
    .catch((error) => {
      dispatch(loginUserFailure({ message: error.message }));
    });
};
