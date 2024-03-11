import { API_URL } from '@/constants/api';

export async function postForm<T>(
  url: string,
  body: BodyInit | null | undefined,
) {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body,
  });

  const data: T = await res.json();
  return data;
}

const API = {
  postForm,
};

export default API;
