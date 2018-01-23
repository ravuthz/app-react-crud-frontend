import axios from "axios";

export const client = axios.create({
  baseURL: "https://app-react-crud-backend.herokuapp.com",
  headers: {
    "Content-Type": "application/json"
  }
})