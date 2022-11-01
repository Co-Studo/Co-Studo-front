import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '@components/common/Text';

export default {
  title: 'common/Text',
  component: Text,
  args: {},
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = () => (
  <div>
    <Text variant="sectionTitle" as="h2">
      스터디 생성
    </Text>
    <Text variant="sectionDescription" as="p">
      스터디 생성을 위해 정보를 입력해주세요.
    </Text>
    <Text variant="articleTitle" as="h3">
      스터디 이름
    </Text>
    <Text variant="sectionDescription" as="p">
      스터디 한줄 설명
    </Text>
    <Text
      variant="sectionDescription"
      as="p"
      sx={{
        fontSize: 'large',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'primary',
      }}
    >
      여기는 문장이고,
      <Text.Highlight sx={{ color: 'warning' }}>강조단어</Text.Highlight>
    </Text>
    <div css={{ width: '200px' }}>
      <Text as="p" ellipsis>
        아주 기이이이이이이이이이이이인 1줄 문장
      </Text>
      <Text as="p" ellipsis={2}>
        아주
        기이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이인
        2줄 문장
      </Text>
    </div>
  </div>
);
