import axios from "axios";

export const request = axios.create({
  baseURL: "https://640157ceab6b7399d0a3b53f.mockapi.io/products",
});
