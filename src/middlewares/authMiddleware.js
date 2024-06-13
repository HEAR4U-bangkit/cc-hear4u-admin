import axiosInstance from "@/libs/axios";

export default function authGuard(token) {
  if (!token || token == undefined) {
    return false;
  }

  try {
    const accessToken = JSON.parse(token);

    return axiosInstance
      .get("/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((data) => {
        // set state
        return true;
      })
      .catch((error) => {
        return false;
      });
  } catch (error) {
    return false;
  }
}
