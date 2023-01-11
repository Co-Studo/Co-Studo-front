import { FlexBox, Text } from '@cos-ui/react';
import { useRef } from 'react';

import { useIsOverflow } from '@hooks/useIsOverflow';

type TagListProps = {
  tags: {
    id: number;
    name: string;
  }[];
};

const TagList = ({ tags }: TagListProps) => {
  const tagListRef = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflow(tagListRef, [tags]);

  return (
    <div ref={tagListRef}>
      <FlexBox as="ul" sx={{ gap: 1, height: '5rem', flexWrap: 'wrap' }}>
        {isOverflow ? (
          <Text sx={{ color: 'primary' }}>
            # 태그 {tags.length}개 모두 보기
          </Text>
        ) : (
          tags.map((tag) => (
            <li key={tag.id}>
              <Text sx={{ color: 'primary' }}>{`# ${tag.name}`}</Text>
            </li>
          ))
        )}
      </FlexBox>
    </div>
  );
};

export default TagList;
