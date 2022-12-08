import { BorderTab } from '@cos-ui/react';
import { useLayoutEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const TAB_LIST = [
  {
    id: 1,
    label: '소개',
    link: 'introduce',
  },
  {
    id: 2,
    label: '공지사항',
    link: 'announcement',
  },
  {
    id: 3,
    label: '아티클',
    link: 'article',
  },
];

const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [defaultIndex, setDefaultIndex] = useState(0);

  useLayoutEffect(() => {
    const index = TAB_LIST.findIndex(({ link }) =>
      location.pathname.includes(link),
    );
    setDefaultIndex(index);
  }, []);

  return (
    <div>
      <BorderTab.Group defaultIndex={defaultIndex}>
        <BorderTab.List>
          {TAB_LIST.map(({ id, label, link }) => (
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
