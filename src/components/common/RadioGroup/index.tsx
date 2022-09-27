import {
  useMemo,
  FormEvent,
  ReactNode,
  useContext,
  createContext,
} from 'react';

type RadioState = {
  name: string;
  selectedValue: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
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

type RadioGroupProps = RadioState & {
  children: ReactNode;
};

type RadioGroupChildren = {
  Title: React.FC<TitleProps>;
  Option: React.FC<OptionProps>;
};

const RadioGroup: React.FC<RadioGroupProps> & RadioGroupChildren = ({
  name,
  children,
  onChange,
  selectedValue,
  ...props
}) => {
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

const Option: React.FC<OptionProps> = ({
  id,
  value,
  children,
  disabled,
  ...props
}) => {
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

const Title: React.FC<TitleProps> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

RadioGroup.Option = Option;
RadioGroup.Title = Title;

export default RadioGroup;
