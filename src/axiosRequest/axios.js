import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
// base url to make request to the movies database
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
