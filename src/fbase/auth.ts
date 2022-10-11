import {
  getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import app from '@fbase/app';

type AuthProvider = 'github' | 'email';

type LoginInput = {
  email: string;
  password: string;
  authProvider: AuthProvider;
};

const auth = getAuth(app);

export const login = ({ email, password, authProvider }: LoginInput) => {
  if (authProvider === 'github') {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  auth.signOut();
};

export const getMe = () => auth.currentUser;
