import { api } from './api';

export async function deleteSale(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  return api.delete(`/sales/${id}`);
}
