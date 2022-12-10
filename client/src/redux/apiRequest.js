import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./loginSlice";

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