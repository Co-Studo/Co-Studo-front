import { FlexBox, Text } from '@cos-ui/react';
import { ReactElement } from 'react';

type RowProps = {
  title: ReactElement | string;
  description?: ReactElement | string;
  left?: ReactElement;
  right?: ReactElement;
  leftProps?: SideProps;
  rightProps?: SideProps;
};

type SideProps = Omit<FlexBoxItemProps, 'children'>;

type FlexBoxItemSX = {
  alignSelf?: string;
};

type FlexBoxItemProps = {
  children: ReactElement;
  sx?: FlexBoxItemSX;
};

const FlexBoxItem = ({ children, sx }: FlexBoxItemProps) => (
  <div css={{ ...sx }}>{children}</div>
);

const Row = ({
  title,
  description,
  left,
  right,
  leftProps,
  rightProps,
}: RowProps) => {
  const isString = (prop) => prop && typeof prop === 'string';

  return (
    <FlexBox sx={{ gap: '0.8rem', width: '100%' }}>
      {leftProps && left ? (
        <FlexBoxItem {...leftProps}>{left}</FlexBoxItem>
      ) : (
        left
      )}
      <FlexBox sx={{ flexDirection: 'column', flexGrow: 1 }}>
        {isString(title) ? <Text variant="articleTitle">{title}</Text> : title}
        {isString(description) ? (
          <Text variant="articleDescription">{description}</Text>
        ) : (
          description
        )}
      </FlexBox>
      {rightProps && right ? (
        <FlexBoxItem {...rightProps}>{right}</FlexBoxItem>
      ) : (
        right
      )}
    </FlexBox>
  );
};

export default Row;
