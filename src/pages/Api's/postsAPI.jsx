import axios from "axios";
import { BASE_URL } from "../services/authservice";

const getHomePosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  if (res?.status === 200) {
    console.log("post get results", res);
    return res.data;
  } else if (res?.status === 404) {
    console.log("No posts found");
    return [];
  } else if (res?.status === 400) {
    console.log("Error in getting posts", res);
    throw new Error("Failed to get posts");
  }
};

const getPostLikes = async ({ id, like_id }) => {
  const res = await axios.put(`${BASE_URL}/posts`, { id, like_id });
  if (res?.status === 200) {
    console.log("post get results", res);
    return res.data;
  } else if (res?.status === 404) {
    console.log("No posts found");
    return [];
  } else if (res?.status === 400) {
    console.log("Error in getting posts", res);
    throw new Error("Failed to get posts");
  }
};

export { getHomePosts, getPostLikes };
