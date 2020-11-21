import Axios from "axios";
import React from "react";

export interface iFunctions {
  readonly register: (myjson: string) => void;
}

const baseURL = "http://34.68.55.0:5010/";

export interface User {
  email: string;
  password: string;
}

export const functions = () => {
  async function register(myjson: string) {
    Axios.post(baseURL + "api/Auth/Register", myjson)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return {
    register,
  };
};

export default functions;
