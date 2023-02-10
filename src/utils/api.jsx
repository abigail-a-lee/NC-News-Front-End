import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://abi-nc-news.onrender.com/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function getArticles(
  topic = "all",
  sort = "created_at",
  order = "desc"
) {
  return axiosClient.get(
    `/articles${
      topic === "all" ? "?" : "?topic=" + topic + "&"
    }sort_by=${sort}&order=${order}`
  );
}

export function getArticleById(id) {
  return axiosClient.get(`/articles/${id}`);
}

export function patchArticleById(id, vote) {
  const voteRequest = {
    inc_votes: vote,
  };
  return axiosClient.patch(`/articles/${id}`, voteRequest);
}

export function getCommentsById(id) {
  return axiosClient.get(`/articles/${id}/comments`);
}

export function postNewComment(id, newComment) {
  return axiosClient.post(`/articles/${id}/comments`, newComment);
}

export function deleteComment(id) {
  return axiosClient.delete(`/comments/${id}`);
}
