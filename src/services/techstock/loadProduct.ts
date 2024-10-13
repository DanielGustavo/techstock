import { api } from './api';
import { TProduct } from './loadProducts';

export async function loadProduct(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TProduct>(`/products/${id}`);
  const product = response.data;

  if (product.thumbnailPathname) {
    product.thumbnailPathname = `http://localhost:8000/uploads/${product.thumbnailPathname}`;
  }

  return product;
}
