import { ReactNode } from 'react';

const PageLayout: React.FC<{ children: ReactNode; sx?: object }> = (props) => {
  const { children, sx } = props;

  return (
    <main
      css={{
        marginTop: '9rem',
        marginLeft: '2rem',
        marginRight: '2rem',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx,
      }}
      {...props}
    >
      {children}
    </main>
  );
};

export default PageLayout;
