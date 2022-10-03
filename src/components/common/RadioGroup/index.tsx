import {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  cloneElement,
  Children,
  isValidElement,
} from 'react';

interface RadioState {
  selectedValue: string;
}

const RadioGroupContext = createContext<RadioState | null>(null);

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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  selectedValue,
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
  value: string;
  children: ReactNode;
  disabled?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Option = ({ id, value, children, disabled, ...props }: OptionProps) => {
  const { name, selectedValue, onChange } = useRadioContext();
  const optionId = id || `option-${name}-${value}`;
  return (
    <div {...props}>
      <input
        type="radio"
        name={name}
        id={optionId}
        value={value}
        disabled={disabled}
        onChange={onChange}
        checked={value === selectedValue}
      />
      <label htmlFor={optionId}>{children}</label>
    </div>
  );
};

type TitleProps = {
  id?: string;
  children: ReactNode;
};

const Title = ({ children, ...props }: TitleProps) => (
  <div {...props}>{children}</div>
);

RadioGroup.Option = Option;
RadioGroup.Title = Title;

export default RadioGroup;
