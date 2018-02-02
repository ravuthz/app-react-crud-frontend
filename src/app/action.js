import axios from "axios";

export const client = axios.create({
  baseURL: "http://all-script-ravuthz.c9users.io:8081", //"https://app-react-crud-backend.herokuapp.com",
  headers: {
    "Content-Type": "application/json"
  }
})