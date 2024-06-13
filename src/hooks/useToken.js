import Cookies from "js-cookie";

export const useGetToken = () => {
  const token = Cookies.get("token");
  const cleanedToken = token ? token.replace(/"/g, "") : null;

  return cleanedToken;
};

export const useRemoveToken = () => {
  Cookies.remove("token");

  return;
};
