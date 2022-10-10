import http from '@apis/http';

export type UserEntity = {
  id: number;
  email: string;
  nickname: string;
  avatarUrl: string;
};

export const fetchMe = () =>
  http.get<UserEntity>(`__API_END_POINT__/user/me`, {
    withCredentials: true,
  });

export const fetchGithubLogin = (code: string) =>
  http.get(`__API_END_POINT__/user/githubLogin?code=${code}`, {
    withCredentials: true,
  });

export const fetchLogout = () =>
  http.get(`__API_END_POINT__/user/logout`, {
    withCredentials: true,
  });
