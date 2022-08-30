import { useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initValue: T,
): [T, (value: T) => void] => {
  const storedValue = localStorage.getItem(key);
  const initState = storedValue ? JSON.parse(storedValue) : initValue;

  const [value, setValue] = useState<T>(initState);

  const setStorage = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStorage];
};

export default useLocalStorage;
