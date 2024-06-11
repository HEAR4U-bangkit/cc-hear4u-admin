import axiosInstance from "@/libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProfile = (token) => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      return await axiosInstance.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};

export const useGetOneUser = (userId, token) => {
  return useQuery({
    queryKey: [`user-${userId}`],
    queryFn: async () => {
      return await axiosInstance.get(`/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};

export const useCreateUser = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (token, body) => {
      return await axiosInstance.post("/user", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onError,
    onSuccess,
  });
};

export const useUpdateUser = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (token, userId, body) => {
      return await axiosInstance.put(`/user/${userId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess,
    onError,
  });
};

export const useDeleteUser = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (token, userId) => {
      return await axiosInstance.delete(`/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess,
    onError,
  });
};
