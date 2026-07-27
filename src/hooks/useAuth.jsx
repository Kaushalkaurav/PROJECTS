import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { registeredUsers } = useSelector((state) => state.auth);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //login
  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found or invalid credentials");
      reset();
      return;
    }

    dispatch(loginUser(user));
    toast.success("Logged In Successfully");

    navigate("/main");

    reset();
  };

  //register
  let registerFormSubmit = (data) => {
    const existingUser = registeredUsers.find(
  (user) => user.email === data.email
);

if (existingUser) {
  toast.error("Email already registered");
  return;
}
    dispatch(registerUser(data));
    dispatch(loginUser(data));

    toast.success("User Registered Successfully");
    navigate("/main");

    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};