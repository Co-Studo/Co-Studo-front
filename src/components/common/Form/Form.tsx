import {
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  useContext,
  useState,
} from 'react';

type ValidationMode = 'onChange' | 'onBlur' | 'onSubmit';

type FormContextType = {
  values: Record<string, any>;
  setValues: Dispatch<any>;
  errors: Record<string, any>;
  setErrors: Dispatch<any>;
  validationMode?: ValidationMode;
};

export const FormContext = createContext<FormContextType | null>(null);
FormContext.displayName = 'FormContext';

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      'useFormContext should be used within FormContext.Provider',
    );
  }
  return context;
};

type FormProps = {
  validationMode?: ValidationMode;
  children: ReactNode;
  onSubmit?: (
    e: FormEvent<HTMLFormElement>,
    values: Record<string, any>,
  ) => void;
};

const Form = ({
  validationMode,
  children,
  onSubmit,
  ...restProps
}: FormProps) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e, values);
  };

  return (
    <FormContext.Provider
      value={{ values, setValues, errors, setErrors, validationMode }}
    >
      <form onSubmit={handleSubmit} {...restProps}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
