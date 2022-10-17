import http from '@apis/http';

export type ImageEntity = {
  imageUrl: string;
}

export const uploadImage = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);

  return http.post<ImageEntity>(`__API_END_POINT__/image`, formData, {
    withCredentials: true,
  });
};
