import axios from "axios";
import {
  loginFail,
  loginStart,
  loginSuccess,
  getCurrentFail,
  getCurrentStart,
  getCurrentSuccess,
} from "./loginSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("http://localhost:8000/login", user);
    if (response.data) {
      dispatch(loginSuccess(response.data));
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/trang-chu");
    }
  } catch (error) {
    dispatch(loginFail());
  }
};

export const getAccounts = async (accessToken, dispatch) => {
  dispatch(getCurrentStart());
  try {
    const response = await axios.get("http://localhost:8000/homepage", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getCurrentSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentFail());
  }
};
