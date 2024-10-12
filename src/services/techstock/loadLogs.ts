import { api } from './api';

export type TLog = {
  description: string;
  datetime: string;
  user_name: string;
};

export async function loadLogs() {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get('/logs');

  return response.data;
}
