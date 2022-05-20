export type state = {
  posts: post[];
  post: post;
  users: user[];
  user: user;
  coments: comment[];
  loading: boolean;
};

export type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
