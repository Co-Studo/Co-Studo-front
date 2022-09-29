import {
  useMemo,
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  PropsWithChildren,
} from 'react';

type RadioState = {
  name: string;
  selectedValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RadioGroupContext = createContext<RadioState>({
  name: '',
  selectedValue: '',
  onChange: () => {},
});

const useRadioContext = () => {
  const context = useContext(RadioGroupContext);
  if (context === undefined) {
    throw new Error('useMyContext should be used within MyContext.Provider');
  }
  return context;
};

type RadioGroupProps = PropsWithChildren<RadioState>;

const RadioGroup = ({
  name,
  children,
  onChange,
  selectedValue,
  ...props
}: RadioGroupProps) => {
  const values = useMemo(
    () => ({ name, selectedValue, onChange }),
    [name, selectedValue, onChange],
  );

  return (
    <RadioGroupContext.Provider value={values}>
      <div {...props}>{children}</div>
    </RadioGroupContext.Provider>
  );
};

type OptionProps = {
  id?: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
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
