import axiosApp, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  headers: {
    "Content-Type": "application/json",
  },
};

const axios = axiosApp.create(options);

export default axios;
