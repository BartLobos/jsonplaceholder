import { GET_COMENTS, GET_POSTS, SET_LOADING } from "../types";
import { state } from "../../types/Post";

export const postReducer = (
  state: state,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_COMENTS:
      return {
        ...state,
        coments: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
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
