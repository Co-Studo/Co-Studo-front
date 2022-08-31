import React from 'react';

import AnonymousCircle from '@layouts/Header/AnonymousCircle';

type Props = {
  children: React.ReactNode;
};

type StateType = {
  hasError: boolean;
};

class UserInfoErrorBoundary extends React.Component<Props, StateType> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // 재 로그인 Modal 생성하면 좋을 듯
      return <AnonymousCircle />;
    }
    return children;
  }
}

export default UserInfoErrorBoundary;
