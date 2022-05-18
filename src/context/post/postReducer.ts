import { GET_POST, GET_POSTS, SET_LOADING } from "../types";
import { state } from "../../types/Post";

export default (state: state, action: { type: string; payload: any }) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
