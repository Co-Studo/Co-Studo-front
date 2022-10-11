import { atom } from 'recoil';

export type UserState = {
  isLogin: boolean;
  photoURL : string;
};

const defaultState: UserState = {
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
  photoURL: '',
};

export const userState = atom({
  key: 'userState',
  default: defaultState,
});
