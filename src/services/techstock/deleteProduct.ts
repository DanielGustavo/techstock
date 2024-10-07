import { api } from './api';

export async function deleteProduct(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.delete(`/products/${id}`);

  return response.data;
}
