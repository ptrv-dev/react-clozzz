export interface IBrand {
  _id: number;
  title: string;
  url: string;
  image: string;
}

export interface INews {
  _id: number;
  image: string;
  title: string;
  createdAt: Date;
}
