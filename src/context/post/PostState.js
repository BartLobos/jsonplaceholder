import postReducer from "./postReducer";
import { PostContext } from "./postContext";
import { useReducer } from "react";
import axios from "axios";
import { GET_POST, GET_POSTS, SET_LOADING } from "../types";
export const PostState = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
    post: {},
    loading: true,
  });

  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      "Content-type": "application/json",
    },
  });

  const getPosts = async () => {
    const data = await api.get("/posts");
    dispatch({
      type: GET_POSTS,
      payload: data.data,
    });
  };

  const value = { state, dispatch };
  return (
    <PostContext.Provider value={{ getPosts, posts: state.posts }}>
      {children}
    </PostContext.Provider>
  );
};
