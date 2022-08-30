import { atom } from 'recoil';

export type UserState = {
  isLogin: boolean;
};

const defaultState: UserState = {
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
};

export const userState = atom({
  key: 'userState',
  default: defaultState,
});
