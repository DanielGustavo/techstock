import { api } from './api';
import { TProduct } from './loadProducts';

export async function loadProduct(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TProduct>(`/products/${id}`);
  const product = response.data;

  if (product.thumbnail_pathname) {
    product.thumbnail_pathname = `http://localhost:3000/${product.thumbnail_pathname}`;
  }

  return product;
}
