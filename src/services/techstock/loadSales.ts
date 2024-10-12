import { api } from './api';

export type TSale = {
  id: number;
  name?: string;
  description?: string;
  discount?: number;
  date_time: Date;
  totalValue: number;
};

type TLoadSalesResponse = Array<{
  id: number;
  name?: string;
  description?: string;
  discount?: number;
  date_time: string;
  totalValue: number;
}>;

export async function loadSales() {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadSalesResponse>('/sales');

  const sales: TSale[] = response.data.map((sale) => {
    return {
      ...sale,
      date_time: new Date(sale.date_time),
    };
  });

  return sales;
}
