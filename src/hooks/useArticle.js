import axiosInstance from "@/libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllArticles = (token) => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      return await axiosInstance.get("/articles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};


export const useGetOneArticle = (articleId, token) => {
  return useQuery({
    queryKey: [`article-${articleId}`],
    queryFn: async () => {
      return await axiosInstance.get(`/articles/${articleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};

export const useCreateArticle = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (token, body) => {
      return await axiosInstance.post("/articles", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onError,
    onSuccess,
  });
};

export const useUpdateArticle = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (token, articleId, body) => {
      return await axiosInstance.put(`/articles/${articleId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess,
    onError,
  });
};

export const useDeleteArticle = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (token, articleId) => {
      return await axiosInstance.delete(`/articles/${articleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess,
    onError,
  });
};
