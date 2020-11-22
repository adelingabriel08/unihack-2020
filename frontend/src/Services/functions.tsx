import Axios from "axios";
import History from "../Components/History";

export interface iFunctions {
  readonly register: (myjson: string) => void;
  readonly saveProfile: (myjson: string) => void;
  readonly login: (myjson: string) => void;
}

const baseURL = "http://34.68.55.0:5010/";

function setToken(token: string) {
  sessionStorage.setItem("token", JSON.stringify(token));
}

function getToken() {
  const token = JSON.parse(sessionStorage.getItem("token") + "");
  return token.token;
}

export const functions = () => {
  async function register(myjson: string) {
    Axios.post(baseURL + "api/Auth/Register", myjson, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setToken(response.data);
        console.log(response.data);
        History.push("/completeprofile");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function login(myjson: string) {
    Axios.post(baseURL + "api/Auth/Login", myjson, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setToken(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function saveProfile(myjson: string) {
    Axios.post(baseURL + "Create", myjson, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
      .then(function (response) {
        console.log(response);
        History.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return {
    register,
    saveProfile,
    login,
  };
};

export default functions;
