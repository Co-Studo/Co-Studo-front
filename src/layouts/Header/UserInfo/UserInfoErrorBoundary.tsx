import React from 'react';

import LoginButton from '@layouts/Header/LoginButton';

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

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // 재 로그인 Modal 생성하면 좋을 듯
      return <LoginButton />;
    }
    return children;
  }
}

export default UserInfoErrorBoundary;
