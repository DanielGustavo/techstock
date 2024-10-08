import { api } from './api';

export type TBrand = {
  id: number;
  name: string;
};

export async function loadBrands() {
  const response = await api.get<TBrand[]>('/brands');

  return response.data;
}
