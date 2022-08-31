import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useRef,
} from 'react';
import { css } from 'styled-components';

type DropdownState = {
  isOpen: boolean;
  height: number;
};

type DropdownAction = { type: 'TOGGLE_OPEN'; height: number };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN': {
      return {
        ...state,
        isOpen: !state.isOpen,
        height: action.height,
      };
    }
    default:
      return state;
  }
};

const initState = {
  isOpen: false,
  height: 0,
};

const DropdownContext = createContext<
  [DropdownState, Dispatch<DropdownAction>]
>([initState, () => {}]);

const Dropdown = ({ children }) => {
  const dropdownReducer = useReducer(reducer, initState);
  return (
    <DropdownContext.Provider value={dropdownReducer}>
      <div css={{ position: 'relative' }}>{children}</div>
    </DropdownContext.Provider>
  );
};

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  return context;
};

const DropdownTrigger = (props: { trigger: ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [, dispatch] = useDropdownContext();
  const { trigger } = props;

  const handleTrigger = () => {
    if (!triggerRef.current) return;
    dispatch({ type: 'TOGGLE_OPEN', height: triggerRef.current.offsetHeight });
  };

  return (
    <button type="button" onClick={handleTrigger} ref={triggerRef}>
      {trigger}
    </button>
  );
};

const DropdownList = (props) => {
  const [{ isOpen, height }] = useDropdownContext();
  const { children, transformOrigin } = props;

  return isOpen ? (
    <ul
      css={css`
        width: max-content;
        position: absolute;
        top: ${height}px;
        background-color: ${({ theme }) => theme.palette.bgColor};
        ${transformOrigin === 'right'
          ? css`
              right: 0;
            `
          : css`
              left: 0;
            `}
      `}
      {...props}
    >
      {children}
    </ul>
  ) : null;
};

const DropdownItem = (props) => {
  const { children } = props;
  return <li {...props}>{children}</li>;
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
