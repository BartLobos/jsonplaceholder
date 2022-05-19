import { postReducer } from "./postReducer";
import { PostContext } from "./postContext";
import { useReducer } from "react";
import axios from "axios";
import { GET_COMMENTS, GET_POSTS, SET_LOADING, GET_POST } from "../types";

export const PostState = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
    comments: [],
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

  const getPost = async (postId) => {
    setLoading();
    const data = await api.get(`/posts/${postId}`);
    dispatch({
      type: GET_POST,
      payload: data.data,
    });
  };

  const getComments = async (postId) => {
    setLoading();
    const data = await api.get(`posts/${postId}/comments`);
    dispatch({
      type: GET_COMMENTS,
      payload: data.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PostContext.Provider
      value={{
        getPosts,
        getPost,
        getComments,
        posts: state.posts,
        post: state.post,
        comments: state.comments,
        loading: state.loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
