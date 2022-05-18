export type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type state = {
  posts: post[];
  post: post;
  loading: boolean;
};
