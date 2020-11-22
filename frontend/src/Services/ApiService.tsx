import Axios from "axios";
import History from "../Components/History";
import {HealthState} from "../Models/Models";

export interface iFunctions {
  readonly register: (myjson: string) => void;
  readonly saveProfile: (myjson: string) => void;
  readonly login: (myjson: string) => void;
}

const baseURL = "http://34.68.55.0:5010/";

function setToken(token: string) {
  localStorage.setItem("token", JSON.stringify(token));
}

function getToken() {
  let token;
  try {
    token = JSON.parse(localStorage.getItem("token") + "");
  }
  catch(e){
    console.log("Token couldn't be find!")
  }
  return token?.token;
}

export const apiService = () => {
  async function register(myjson: string) {
    Axios.post(baseURL + "api/Auth/Register", myjson, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setToken(response.data);
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
        History.push("/completeprofile");
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
        History.push("/health-state");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const addHealthState = async(data: HealthState) =>{
    Axios.post(baseURL + "api/HealthState/Add", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    })
        .then(function (response) {
          History.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  const checkAuth = () =>{
    return !!getToken();

  }

  const Predict = async () =>{
    return Axios.post(baseURL + "Predict", {}, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
  }

  async function getPatients() {
    return await Axios.get(baseURL + "getProfiles", {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  }

  return {
    register,
    saveProfile,
    login,
    getPatients,
    addHealthState,
    checkAuth,
    Predict
  };
};

export default apiService;
