import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  Children,
  cloneElement,
  FC,
  ReactNode,
  ReactElement,
} from 'react';

type TabState = {
  activeIndex: number;
  activateTab: Dispatch<SetStateAction<number>>;
};

const initState = {
  activeIndex: 0,
  activateTab: () => {},
};

const TabContext = createContext<TabState>(initState);
TabContext.displayName = 'TabContext';

const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext should be used within TabContext.Provider');
  }
  return context;
};

type TabGroupProps = {
  defaultIndex?: number;
  children: ReactNode;
};

const TabGroup: FC<TabGroupProps> = ({ defaultIndex, children, ...props }) => {
  const [activeIndex, activateTab] = useState(defaultIndex || 0);

  const value = useMemo(() => ({ activeIndex, activateTab }), [activeIndex]);

  return (
    <TabContext.Provider value={value}>
      <div {...props}>{children}</div>
    </TabContext.Provider>
  );
};

type TabListProps = {
  children: ReactElement[];
};

const TabList: FC<TabListProps> = ({ children, ...props }) => (
  <ul {...props}>
    {Children.map(children, (child, index) =>
      cloneElement(child, {
        tabId: index,
      }),
    )}
  </ul>
);

type TabPropsType = {
  tabId?: number;
  children: ReactNode;
};

const TabRoot: FC<TabPropsType> = ({ tabId, children, ...props }) => {
  const { activeIndex, activateTab } = useTabContext();

  const isActive = activeIndex === tabId;
  const handleTabClick = () => tabId !== undefined && activateTab(tabId);

  return (
    <li {...props} data-selected={isActive}>
      <button type="button" onClick={handleTabClick}>
        {children}
      </button>
    </li>
  );
};

type TabPanelsProps = {
  children: ReactElement[];
};

const TabPanels: FC<TabPanelsProps> = ({ children }) => (
  <>
    {Children.map(children, (child, index) =>
      cloneElement(child, {
        tabId: index,
      }),
    )}
  </>
);

type TabPanelProps = {
  tabId?: number;
  children: ReactNode;
};

const TabPanel: FC<TabPanelProps> = ({ tabId, children, ...props }) => {
  const { activeIndex } = useTabContext();

  const isActive = activeIndex === tabId;

  return isActive ? <div {...props}>{children}</div> : null;
};

const Tab = Object.assign(TabRoot, {
  Group: TabGroup,
  List: TabList,
  Panels: TabPanels,
  Panel: TabPanel,
});

export default Tab;
