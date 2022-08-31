import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { css } from 'styled-components';

type DropdownState = {
  isOpen: boolean;
  bottom: number;
  left: number;
};

type DropdownAction =
  | { type: 'TOGGLE_OPEN' }
  | {
      type: 'UPDATE_TRIGGER_POSITION';
      bottom: number;
      left: number;
    };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN': {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case 'UPDATE_TRIGGER_POSITION':
      return {
        ...state,
        bottom: action.bottom,
        left: action.left,
      };
    default:
      return state;
  }
};

const initState = {
  isOpen: false,
  bottom: 0,
  left: 0,
};

const DropdownContext = createContext<
  [DropdownState, Dispatch<DropdownAction>]
>([initState, () => {}]);

const Dropdown = ({ children }) => {
  const dropdownReducer = useReducer(reducer, initState);
  return (
    <DropdownContext.Provider value={dropdownReducer}>
      {children}
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
    dispatch({ type: 'TOGGLE_OPEN' });
  };

  useEffect(() => {
    const { bottom, left } =
      triggerRef.current?.getBoundingClientRect() as DOMRect;

    dispatch({
      type: 'UPDATE_TRIGGER_POSITION',
      bottom,
      left,
    });
  }, [dispatch]);

  return (
    <button type="button" onClick={handleTrigger} ref={triggerRef}>
      {trigger}
    </button>
  );
};

const DropdownList = (props) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [{ isOpen, bottom, left }] = useDropdownContext();
  const { children, transformOrigin } = props;

  const getPositioningStyle = useCallback(
    (element) => {
      const elementTop = bottom;
      let elementLeft = left;
      if (transformOrigin === 'right') {
        elementLeft = left - element.offsetWidth;
      }
      return {
        elementTop,
        elementLeft,
      };
    },
    [left, bottom, transformOrigin],
  );

  useEffect(() => {
    if (isOpen) {
      const element = listRef.current;
      if (!element) return;
      const { elementTop, elementLeft } = getPositioningStyle(element);
      element.style.top = `${elementTop}px`;
      element.style.left = `${elementLeft}px`;
    }
  }, [isOpen, getPositioningStyle]);

  return isOpen ? (
    <ul
      ref={listRef}
      css={css`
        position: absolute;
        background-color: ${({ theme }) => theme.palette.bgColor};
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
