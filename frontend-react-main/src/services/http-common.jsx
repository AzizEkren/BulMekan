import axios from "axios";
export default axios.create({
  baseURL: "https://bul-mekan-azizs-projects-6db5a937.vercel.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
