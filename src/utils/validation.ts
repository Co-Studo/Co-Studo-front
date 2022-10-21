import { all } from '@utils/functional';

const isInteger = (number: number) => {
  const stringNumber = number.toString();
  return number === parseInt(stringNumber, 10);
};

const isNaturalNumber = (number: number) => isInteger(number) && number > 0;

type Values<V> = { [key in string]: V };

type ValidationFunction<V> = (value: V) => boolean;

const validate = <V>(values: Values<V>, funcs: ValidationFunction<V>[]) => {
  Object.entries(values).forEach(([key, value]) => {
    if (value && all(...funcs)(value)) throw new Error(`Please check ${key}.`);
  });
};

export { isInteger, isNaturalNumber, validate };
