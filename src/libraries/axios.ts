import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
//const SITE = process.env.REACT_APP_SITE as string;

const axiosInstance = axios.create({
  baseURL: API_URL,
  //   headers: {
  //     Site: SITE,
  //   },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // console.log("config", config.data instanceof File);
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      //   store.dispatch(logout());
      //   localStorage.clear();
      //   window.location.href === "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
