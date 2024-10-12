import { api } from './api';

export type TUser = {
  id: number;
  name: string;
};

export async function login(name: string, password: string) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.post<TUser>('/users/login', { name, password });

  return response.data;
}
