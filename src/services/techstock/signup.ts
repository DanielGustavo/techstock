import { api } from './api';
import { TUser } from './login';

export async function signUp(name: string, password: string) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.post<TUser>('/users', { name, password });

  return response.data;
}
