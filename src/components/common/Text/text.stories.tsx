import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '@components/common/Text';

export default {
  title: 'common/Text',
  component: Text,
  args: {},
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = () => (
  <>
    <Text
      variant="sectionTitle"
      render={(style) => <h2 style={style}>스터디 생성</h2>}
    />
    <Text
      variant="sectionDescription"
      render={(style) => (
        <p style={style}>스터디 생성을 위해 정보를 입력해주세요.</p>
      )}
    />
    <Text
      variant="articleTitle"
      render={(style) => <h3 style={style}>스터디 이름</h3>}
    />
    <Text
      variant="sectionDescription"
      render={(style) => <p style={style}>스터디 한줄 설명</p>}
    />
    <Text
      variant="sectionDescription"
      sx={{ fontSize: 'large', fontStyle: 'italic', color: 'primary' }}
      render={(style) => (
        <a href="https://github.com/Co-Studo" style={style}>
          custom Text
        </a>
      )}
    />
  </>
);
