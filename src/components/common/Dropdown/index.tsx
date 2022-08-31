import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const DropdownContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

const Dropdown = ({ children }) => {
  const dropdownState = useState(true);
  return (
    <DropdownContext.Provider value={dropdownState}>
      {children}
    </DropdownContext.Provider>
  );
};

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  return context;
};

const DropdownTrigger = (props: { trigger: ReactNode }) => {
  const [, setIsOpen] = useDropdownContext();
  const { trigger } = props;

  const handleTrigger = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleTrigger}>
      {trigger}
    </button>
  );
};

const DropdownList = (props) => {
  const [isOpen] = useDropdownContext();
  const { children } = props;

  return isOpen ? <ul {...props}>{children}</ul> : null;
};

const DropdownItem = (props) => {
  const { children } = props;
  return <li {...props}>{children}</li>;
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
