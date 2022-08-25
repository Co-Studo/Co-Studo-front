import { atom } from 'recoil';

export type User = {
  email: string;
  nickname: string;
  avatarUrl: string;
};

export const userState = atom<User>({
  key: 'userState',
  default: {
    email: '',
    nickname: 'anonymous',
    avatarUrl: '',
  },
});
