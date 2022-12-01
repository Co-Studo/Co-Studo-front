import React from 'react';

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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // 재 로그인 Modal 생성하면 좋을 듯
      return <span>로그인하세요</span>;
    }
    return children;
  }
}

export default UserInfoErrorBoundary;
