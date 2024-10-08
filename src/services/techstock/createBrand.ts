import { api } from './api';

import { TBrand } from './loadBrands';

export async function createBrand(name: string) {
  const response = await api.post<TBrand>('/brands', { name });

  return response.data;
}
