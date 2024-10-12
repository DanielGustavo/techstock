import { api } from './api';
import { TProduct } from './loadProducts';
import { TSale } from './loadSales';

type TLoadSaleResponse = {
  sale: {
    id: number;
    name?: string;
    description?: string;
    discount?: number;
    date_time: string;
    totalValue: number;
  };
  productSale: TProduct[];
};

export async function loadSale(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadSaleResponse>(`/sales/${id}`);

  const sale: TSale = {
    ...response.data.sale,
    date_time: new Date(response.data.sale.date_time),
  };

  return { sale, products: response.data.productSale };
}
