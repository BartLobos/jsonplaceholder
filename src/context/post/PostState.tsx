import { ReactChild } from 'react';
import { postReducer } from './postReducer';
import { PostContext } from './postContext';
import { useReducer } from 'react';
import axios from 'axios';
import {
    GET_COMMENTS,
    GET_POSTS,
    SET_LOADING,
    GET_POST,
    GET_USERS,
    GET_USER,
} from '../types';
import { comment, post, state } from '../../types/Post';
type PostStateProps = {
    children: ReactChild;
};

export const PostState = ({ children }: PostStateProps) => {
    const initialState: state = {
        posts: [],
        post: { userId: 0, title: '', id: 0, body: '' },
        users: [],
        user: {
            id: 0,
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: '',
                },
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: '',
            },
        },
        comments: [],
        loading: true,
    };
    const [state, dispatch] = useReducer(postReducer, initialState);

    const api = axios.create({
        baseURL: 'https://pwoprojectbackend.azurewebsites.net/api',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept',
        },
    });

    const getPosts = async () => {
        setLoading();
        const data = await api.get('/posts');
        console.log(data);
        dispatch({
            type: GET_POSTS,
            payload: data.data,
        });
    };

    const getPost = async (postId: number) => {
        setLoading();
        const data = await api.get(`/posts/${postId}`);
        dispatch({
            type: GET_POST,
            payload: data.data,
        });
    };

    const addPost = async ({ userId, title, body }: post) => {
        const response = await api.post('/posts', {
            title: title,
            body: body,
            userId: userId,
        });
        return response;
    };

    const getUsers = async () => {
        setLoading();
        const data = await api.get('/users');
        dispatch({
            type: GET_USERS,
            payload: data.data,
        });
    };

    const getUser = async (userId: number) => {
        setLoading();
        const data = await api.get(`/users/${userId}`);
        dispatch({
            type: GET_USER,
            payload: data.data,
        });
    };

    const getUserPosts = async (userId: number) => {
        setLoading();
        const data = await api.get(`/users/${userId}/posts`);
        dispatch({
            type: GET_POSTS,
            payload: data.data,
        });
    };

    const getComments = async (postId: number) => {
        setLoading();
        const data = await api.get(`posts/${postId}/comments`);
        dispatch({
            type: GET_COMMENTS,
            payload: data.data,
        });
    };

    const addComment = async ({ postId, id, name, email, body }: comment) => {
        const response = await api.post(`/posts/${postId}/comments`, {
            name: name,
            body: body,
            email: email,
        });
        return response;
    };

    const setLoading = () => dispatch({ type: SET_LOADING, payload: null });

    return (
        <PostContext.Provider
            value={{
                getPosts,
                posts: state.posts,
                getPost,
                getUserPosts,
                post: state.post,
                addComment,
                getComments,
                comments: state.comments,
                getUsers,
                users: state.users,
                getUser,
                user: state.user,
                addPost,
                loading: state.loading,
            }}>
            {children}
        </PostContext.Provider>
    );
};
