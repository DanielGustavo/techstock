import { api } from './api';

export type TProduct = {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  thumbnail_pathname?: string;
  price: number;
  brand: {
    id: number;
    name: string;
  };
};

type TLoadProductsResponse = Array<TProduct>;

export async function loadProducts() {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadProductsResponse>('/products');

  response.data.forEach((product) => {
    if (product.thumbnail_pathname) {
      product.thumbnail_pathname = `http://localhost:3000/${product.thumbnail_pathname}`;
    }
  });

  return response.data;
}
