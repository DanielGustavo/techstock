import { api } from './api';

export type TProduct = {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  thumbnailPathname?: string;
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
    if (product.thumbnailPathname) {
      product.thumbnailPathname = `http://localhost:8000/uploads/${product.thumbnailPathname}`;
    }
  });

  return response.data;
}
