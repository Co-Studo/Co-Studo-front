import http from '@apis/http';

export type UserEntity = {
  id: number;
  email: string;
  nickname: string;
  avatarUrl: string;
};

export const fetchMe = () =>
  http.get<UserEntity>(`__API_END_POINT__/api/user/me`, {
    withCredentials: true,
  });

export const fetchGithubLogin = (code: string) =>
  http.get(`__API_END_POINT__/api/user/githubLogin?code=${code}`, {
    withCredentials: true,
  });

export const fetchLogout = () =>
  http.get(`__API_END_POINT__/api/user/logout`, {
    withCredentials: true,
  });
