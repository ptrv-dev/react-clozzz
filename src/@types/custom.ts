export interface IBrand {
  _id: number;
  title: string;
  url: string;
  image: string;
}

export interface IProduct {
  _id: number;
  brandId: number;
  images: string[];
  title: string;
  description?: string;
  sizes?: string[];
  price: number;
  rating: number;
  createdAt: number;
}

export interface INews {
  _id: number;
  image: string;
  title: string;
  createdAt: Date;
}
