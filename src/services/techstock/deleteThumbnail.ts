import axios from 'axios';

export async function deleteThumbnail(filename: string) {
  const api = axios.create({
    baseURL: 'http://localhost:8000',
  });

  await api.delete(`/thumbnail/${filename}`);
}
