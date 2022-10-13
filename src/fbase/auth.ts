import {
  getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import app from '@fbase/app';

type AuthProvider = 'github' | 'email';

type LoginInput = {
  email?: string;
  password?: string;
  authProvider: AuthProvider;
};

const auth = getAuth(app);

export const login = ({ email, password, authProvider }: LoginInput) => {
  if (authProvider === 'github') {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }
  if (!email) {
    throw new Error('Email is required.');
  }
  if (!password) {
    throw new Error('Password is required.');
  }
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  auth.signOut();
};

export const useMe = () => {
  const [me, setMe] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setMe(user);
    });
    return () => unsubscribe();
  }, []);

  return me;
};
