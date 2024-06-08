const stage = process.env.NEXT_PUBLIC_TYPE;

export default {
  apiUrl:
    stage == "dev"
      ? process.env.NEXT_PUBLIC_API_DEV_URL
      : process.env.NEXT_PUBLIC_API_URL,
};
