import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://abi-nc-news.onrender.com/api`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

export function getArticles(topic){
    return axiosClient.get(`/articles?topic=${topic}`);
}