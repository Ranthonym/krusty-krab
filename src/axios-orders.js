import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-krusty-krab.firebaseio.com/",
});

export default instance;
