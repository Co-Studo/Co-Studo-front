import { ReactNode } from 'react';

const PageLayout: React.FC<{ children: ReactNode; sx?: object }> = (props) => {
  const { children, sx } = props;

  return (
    <main
      css={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      {...props}
    >
      {children}
    </main>
  );
};

export default PageLayout;
