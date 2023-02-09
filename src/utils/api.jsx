import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://abi-nc-news.onrender.com/api`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

export function getArticles(topic){
    return axiosClient.get(`/articles${topic === 'all' ? '' : '?=' + topic}`);
}

export function getArticleById(id){
  return axiosClient.get(`/articles/${id}`);
}

export function getCommentsById(id){
  return axiosClient.get(`/articles/${id}/comments`)
}

export function patchArticleById(id, vote){
  const voteRequest = {
    "inc_votes": vote
  }
  return axiosClient.patch(`/articles/${id}`, voteRequest)
}