import { api } from './api';
import { TProduct } from './loadProducts';

export async function updateProduct(product: any) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.put<TProduct>(`/products/${product.id}`, product);

  return response.data;
}
