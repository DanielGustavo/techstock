import { api } from './api';
import { TSale } from './loadSales';

type TLoadSaleResponse = {
  id: number;
  name?: string;
  description?: string;
  discount?: number;
  datetime: string;
  totalValue: number;
};

export async function loadSale(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadSaleResponse>(`/sales/${id}`);

  const sale: TSale = {
    ...response.data,
    datetime: new Date(response.data.datetime),
  };

  return sale;
}
