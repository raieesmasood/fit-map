import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);