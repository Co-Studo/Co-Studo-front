import { BorderTab } from '@cos-ui/react';
import { useLayoutEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

type TabBarProps = {
  tabs: {
    id: number;
    label: string;
    link: string;
  }[];
};

const TabBar = ({ tabs }: TabBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [defaultIndex, setDefaultIndex] = useState(0);

  useLayoutEffect(() => {
    const index = tabs.findIndex(({ link }) =>
      location.pathname.includes(link),
    );
    if (index !== defaultIndex) setDefaultIndex(index);
  }, [location.pathname]);

  return (
    <div>
      <BorderTab.Group defaultIndex={defaultIndex}>
        <BorderTab.List>
          {tabs.map(({ id, label, link }) => (
            <BorderTab key={id} onClick={() => navigate(link)}>
              {label}
              <BorderTab.ActiveBar />
            </BorderTab>
          ))}
        </BorderTab.List>
      </BorderTab.Group>
      <div css={{ padding: '3rem 4.5rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default TabBar;
