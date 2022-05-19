import { GET_COMMENTS, GET_POSTS, SET_LOADING, GET_POST } from "../types";
import { state } from "../../types/Post";

export const postReducer = (
  state: state,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
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
