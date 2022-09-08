import React, { Children, cloneElement, ReactElement, ReactNode } from 'react';
import styled, { css, useTheme } from 'styled-components';

import Avatar from '@components/common/Avatar';
import colors from '@theme/colors';

type AvatarGropProps = {
  children: ReactNode;
  max?: number;
  total?: number;
};

const AvatarGroupAvatar = styled(Avatar)`
  border: 2px solid ${({ theme }) => theme.palette.bgColor};
  background-color: ${colors.grey700};
  color: ${colors.white};
  margin-left: -0.5rem;
  &:first-child {
    margin-left: 0;
  }
`;

const AvatarGroup: React.FC<AvatarGropProps> = (props) => {
  const {
    children: childrenProp,
    max = 5,
    total = Children.count(childrenProp),
  } = props;

  const theme = useTheme();
  const children = Children.toArray(childrenProp) as ReactElement[];

  if (total > max) {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        {children.slice(0, max).map((child, index) => {
          if (index === max - 1) {
            return (
              <AvatarGroupAvatar
                sx={{
                  width: child.props.sx.width,
                  height: child.props.sx.height,
                  fontSize: `calc(${child.props.sx.width} / 2)`,
                }}
              >
                {`+${total - max + 1}`}
              </AvatarGroupAvatar>
            );
          }
          return cloneElement(child, {
            sx: {
              ...child.props.sx,
              border: `2px solid ${theme.palette.bgColor}`,
              ...(index === 0 ? {} : { marginLeft: '-0.5rem' }),
            },
          });
        })}
      </div>
    );
  }

  return (
    <div>
      {children.map((child, index) =>
        cloneElement(child, {
          sx: {
            ...child.props.sx,
            border: `2px solid ${theme.palette.bgColor}`,
            ...(index === 0 ? {} : { marginLeft: '-0.5rem' }),
          },
        }),
      )}
    </div>
  );
};

export default AvatarGroup;
