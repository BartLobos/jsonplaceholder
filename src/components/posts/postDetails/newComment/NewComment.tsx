import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { PostContext } from '../../../../context/post/postContext';
import { locationType } from '../../../../types/Post';
import './newComment.scss';

type Inputs = {
    email: string;
    title: string;
    body: string;
};

export const NewComment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    let location: locationType = useLocation() as locationType;
    const id = location.pathname.slice(7, location.pathname.length - 11);
    const onSubmit = async ({ title, body, email }: Inputs) => {
        const response = await addComment({
            userId: id,
            email: email,
            name: title,
            body: body,
        });
        if (response.status === 201) {
            alert('Comment added');
            reset({
                email: '',
                title: '',
                body: '',
            });
        } else {
            alert('Comment failed');
        }
    };
    const postsContext = useContext(PostContext);

    const { addComment } = postsContext;

    return (
        <div className='new-comment'>
            <div className='new-comment--header'>NEW COMMENT</div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='new-comment--form'>
                <div className='new-comment--form__group'>
                    <input
                        {...register('email', { required: true })}
                        className='new-comment--form__input'
                        type='input'
                        placeholder='Email'
                        id='email'
                    />
                    <label htmlFor='email' className='new-comment--form__label'>
                        Email
                    </label>
                    {errors.email && <span>Email is required</span>}
                </div>
                <div className='new-comment--form__group'>
                    <input
                        {...register('title', { required: true })}
                        className='new-comment--form__input'
                        type='input'
                        placeholder='Title'
                        id='title'
                    />
                    <label htmlFor='title' className='new-comment--form__label'>
                        Title
                    </label>
                    {errors.title && <span>Title is required</span>}
                </div>

                <div className='new-comment--form__group'>
                    <textarea
                        {...register('body', { required: true })}
                        className='new-comment--form__input'
                        placeholder='Body'
                        id='body'
                    />
                    <label htmlFor='body' className='new-comment--form__label'>
                        Content
                    </label>
                    {errors.body && <span>Content is required</span>}
                </div>

                <div>
                    <input
                        type='submit'
                        className='new-comment--form__button'
                    />
                </div>
            </form>
        </div>
    );
};
