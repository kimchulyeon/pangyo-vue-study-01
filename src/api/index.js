import axios from "axios";

export const fetchNewsList = () => {
  const res = axios.get("https://api.hnpwa.com/v0/news/1.json");
  return res;
};
