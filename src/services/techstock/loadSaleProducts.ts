import { api } from './api';
import { TProduct } from './loadProducts';

type TLoadProductsResponse = Array<
  TProduct & {
    quantity: number;
    product_id: number;
  }
>;

export async function loadSaleProducts(saleId: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadProductsResponse>(
    `/sales/${saleId}/products`
  );

  response.data.forEach((product) => {
    if (product.thumbnail_pathname) {
      product.thumbnail_pathname = `http://localhost:3000/${product.thumbnail_pathname}`;
    }
  });

  return response.data;
}
