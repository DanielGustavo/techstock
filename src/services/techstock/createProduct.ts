import { api } from './api';
import { TProduct } from './loadProducts';

export async function createProduct(product: any) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.post<TProduct>('/products', product);

  return response.data;
}
