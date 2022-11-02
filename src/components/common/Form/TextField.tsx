import { ReactNode, useId, useState, useEffect } from 'react';

import useForm from '@components/common/Form/useForm';

type InputTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url';

type TextFieldProps = {
  validates?: (<V>(value: V) => boolean)[];
  defaultValue?: string;
  label: ReactNode;
  name: string;
  type?: InputTypes;
  placeholder?: string;
};

const TextField = ({
  validates,
  defaultValue,
  label,
  name,
  placeholder,
  ...restProps
}: TextFieldProps) => {
  const { subscribe, errors } = useForm(name, defaultValue);
  const [isError, setIsError] = useState(false);
  const inputId = useId();

  useEffect(() => {
    setIsError(errors?.[name] && errors[name] !== '');
  }, [errors, name]);

  return (
    <div {...restProps}>
      {label && (
        <label htmlFor={inputId} data-error={isError}>
          {label}
        </label>
      )}
      <input
        name={name}
        id={inputId}
        defaultValue={defaultValue}
        placeholder={placeholder}
        data-error={isError}
        aria-invalid={isError}
        aria-labelledby={inputId}
        aria-describedby={`${inputId}-helper`}
        {...subscribe(validates)}
      />
      {isError && <span id={`${inputId}-helper`}>{errors[name]}</span>}
    </div>
  );
};

export default TextField;
