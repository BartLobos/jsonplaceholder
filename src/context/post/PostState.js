import { postReducer } from "./postReducer";
import { PostContext } from "./postContext";
import { useReducer } from "react";
import axios from "axios";
import {
  GET_COMMENTS,
  GET_POSTS,
  SET_LOADING,
  GET_POST,
  GET_USERS,
  GET_USER,
  GET_USER_POSTS,
} from "../types";

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

  const getUsers = async () => {
    setLoading();
    const data = await api.get("/users");
    dispatch({
      type: GET_USERS,
      payload: data.data,
    });
  };

  const getUser = async (userId) => {
    setLoading();
    const data = await api.get(`/users/${userId}`);
    dispatch({
      type: GET_USER,
      payload: data.data,
    });
  };

  const getUserPosts = async (userId) => {
    setLoading();
    const data = await api.get(`/users/${userId}/posts`);
    dispatch({
      type: GET_POSTS,
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
        posts: state.posts,
        getPost,
        getUserPosts,
        post: state.post,
        getComments,
        comments: state.comments,
        getUsers,
        users: state.users,
        getUser,
        user: state.user,
        loading: state.loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
