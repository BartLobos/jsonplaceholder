import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { PostContext } from "../../../../context/post/postContext";
import { locationType } from "../../../../types/Post";
import "./newPost.scss";

type Inputs = {
  title: string;
  body: string;
};

export const NewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  let location: locationType = useLocation() as locationType;
  const id = location.pathname.slice(7, location.pathname.length - 8);
  const onSubmit = async ({ title, body }: Inputs) => {
    const response = await addPost({ userId: id, title: title, body: body });
    if (response.status === 201) {
      alert("Post added");
      reset({
        title: "",
        body: "",
      });
    } else {
      alert("Post failed");
    }
  };
  const postsContext = useContext(PostContext);

  const { addPost } = postsContext;

  return (
    <div className="new-post">
      <div className="new-post--header">NEW POST</div>
      <form onSubmit={handleSubmit(onSubmit)} className="new-post--form">
        <div className="new-post--form__group">
          <input
            {...register("title", { required: true })}
            className="new-post--form__input"
            type="input"
            placeholder="Title"
            id="title"
          />
          <label htmlFor="title" className="new-post--form__label">
            Title
          </label>
          {errors.title && <span>Title is required</span>}
        </div>

        <div className="new-post--form__group">
          <textarea
            {...register("body", { required: true })}
            className="new-post--form__input"
            placeholder="Body"
            id="body"
          />
          <label htmlFor="body" className="new-post--form__label">
            Content
          </label>
          {errors.body && <span>Content is required</span>}
        </div>

        <div>
          <input type="submit" className="new-post--form__button" />
        </div>
      </form>
    </div>
  );
};
