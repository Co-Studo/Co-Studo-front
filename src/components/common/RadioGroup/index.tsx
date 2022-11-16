import {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  cloneElement,
  Children,
  isValidElement,
} from 'react';

import useForm from '@components/common/Form/useForm';

interface RadioState {
  selectedValue: string;
}

const RadioGroupContext = createContext<RadioState | null>(null);
RadioGroupContext.displayName = 'RadioGroupContext';

const useRadioContext = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error(
      'useRadioContext should be used within RadioGroupContext.Provider',
    );
  }
  return context;
};

const passPropsToChildren = <T,>(children: ReactNode, props: T) =>
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...props });
    }
    return child;
  });

export interface RadioGroupProps extends RadioState {
  name: string;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  selectedValue = '',
  name,
  children,
  onChange,
  ...restProps
}: RadioGroupProps) => {
  const state = { selectedValue };
  const childrenProps = { name, onChange };

  return (
    <RadioGroupContext.Provider value={state}>
      <div {...restProps}>{passPropsToChildren(children, childrenProps)}</div>
    </RadioGroupContext.Provider>
  );
};

type OptionProps = {
  id?: string;
  name?: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  validates?: (<V>(value: V) => boolean)[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Option = ({
  id,
  name = '',
  value,
  children,
  onChange,
  disabled,
  validates,
  ...restProps
}: OptionProps) => {
  const { selectedValue } = useRadioContext();
  const {
    value: formValue,
    subscribe = () => {},
    validationMode = 'onChange',
  } = useForm(name, selectedValue) ?? {};

  const optionId = id || `option-${name}-${value}`;
  const isChecked = (formValue ?? selectedValue) === value;
  const handleChange = onChange ?? subscribe(validates)[validationMode];

  return (
    <div {...restProps}>
      <input
        type="radio"
        id={optionId}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={optionId}>{children}</label>
    </div>
  );
};

RadioGroup.Option = Option;

export default RadioGroup;
