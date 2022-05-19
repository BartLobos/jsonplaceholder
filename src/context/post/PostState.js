import { postReducer } from "./postReducer";
import { PostContext } from "./postContext";
import { useReducer } from "react";
import axios from "axios";
import { GET_COMENTS, GET_POSTS, SET_LOADING } from "../types";
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
    setLoading();
    const data = await api.get("/posts");
    dispatch({
      type: GET_POSTS,
      payload: data.data,
    });
  };

  const getComents = async (postId) => {
    setLoading();
    const data = await api.get(`posts/${postId}/comments`);
    dispatch({
      type: GET_COMENTS,
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PostContext.Provider
      value={{
        getPosts,
        getComents,
        posts: state.posts,
        loading: state.loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
