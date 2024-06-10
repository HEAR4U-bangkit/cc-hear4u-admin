import axiosInstance from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

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
