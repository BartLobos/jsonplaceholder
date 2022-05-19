export type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type state = {
  posts: post[];
  coments: coment[];
  loading: boolean;
};

export type coment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
