import axios from 'axios';

type TUploadThumbnail = {
  filename: string;
};

export async function uploadThumbnail(image: File) {
  const formData = new FormData();
  formData.append('thumbnail', image, image.name);

  const api = axios.create({
    baseURL: 'http://localhost:8000',
  });
  const response = await api.put<TUploadThumbnail>('/thumbnail', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data.filename;
}
