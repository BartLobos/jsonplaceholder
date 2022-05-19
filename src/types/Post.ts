export type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type state = {
  posts: post[];
  post: post;
  coments: comment[];
  loading: boolean;
};

export type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
