import axiosInstance from "@/libs/axios";
import { useMutation } from "@tanstack/react-query";

export const useLogin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      return await axiosInstance.post("/login", body);
    },
    onSuccess,
    onError,
  });
};
