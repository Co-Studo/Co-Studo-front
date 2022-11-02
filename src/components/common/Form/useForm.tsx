import { ChangeEvent, FocusEvent, useEffect } from 'react';

import { useFormContext } from '@components/common/Form/Form';
import { validate } from '@utils/validation';

type InputEvent = ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>;

type Subscribe = (validates?: (<V>(value: V) => boolean)[]) => {
  [x: string]: (event: InputEvent) => void;
};

export type FormHookReturns = {
  values: Record<string, any>;
  errors: Record<string, any>;
  subscribe: Subscribe;
};

const useForm = (name: string, initValue?: string): FormHookReturns => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    validationMode = 'onBlur',
  } = useFormContext();

  const setValue = (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const setError = (error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  useEffect(() => {
    setValue(initValue || '');
    setError('');
  }, []);

  const subscribe: Subscribe = (validates) => {
    const handleEvent = (event: InputEvent) => {
      const { value } = event.target;

      setValue(value);

      if (validates) {
        const { ok, message = '' } = validate(value, ...validates);
        setError(ok ? '' : message);
      }
    };

    return { [validationMode]: handleEvent };
  };

  return { values, errors, subscribe };
};

export default useForm;
