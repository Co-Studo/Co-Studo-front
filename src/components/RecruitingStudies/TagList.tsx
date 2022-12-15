import { FlexBox, Text } from '@cos-ui/react';
import { useRef } from 'react';

import Icon from '@components/common/Icon';
import { useIsOverflow } from '@hooks/useIsOverflow';

type TagListProps = {
  tags: {
    id: number;
    name: string;
  }[];
};

const TagList = ({ tags }: TagListProps) => {
  const tagListRef = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflow(tagListRef);

  // TODO : tags slice count
  return (
    <div ref={tagListRef}>
      <FlexBox as="ul" sx={{ gap: 1, height: '5rem', flexWrap: 'wrap' }}>
        {isOverflow ? (
          <>
            {tags.slice(0, 5).map((tag) => (
              <li key={tag.id}>
                <Text sx={{ color: 'primary' }}>{`# ${tag.name}`}</Text>
              </li>
            ))}
            <Icon color="primary" iconName="more" />
          </>
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
