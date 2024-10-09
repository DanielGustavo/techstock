import { api } from './api';

export type TSale = {
  id: number;
  name?: string;
  description?: string;
  discount?: number;
  datetime: Date;
  totalValue: number;
};

type TLoadSalesResponse = Array<{
  id: number;
  name?: string;
  description?: string;
  discount?: number;
  datetime: string;
  totalValue: number;
}>;

export async function loadSales() {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadSalesResponse>('/sales');

  const sales: TSale[] = response.data.map((sale) => ({
    ...sale,
    datetime: new Date(sale.datetime),
  }));

  return sales;
}
