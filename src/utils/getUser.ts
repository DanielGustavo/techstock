import { TUser } from '../services/techstock/login';

export function getUser() {
  const rawUser = localStorage.getItem('user');

  if (!rawUser) return undefined;

  try {
    return JSON.parse(rawUser) as TUser;
  } catch {
    return undefined;
  }
}
