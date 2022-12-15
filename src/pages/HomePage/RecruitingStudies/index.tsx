import { BasicTab, FlexBox, Text } from '@cos-ui/react';

import RecruitingStudyCards from '@pages/HomePage/RecruitingStudies/RecrutingStudyCards';

const RecruitingStudies = () => (
  <BasicTab.Group>
    <FlexBox sx={{ mb: '3rem' }}>
      <Text variant="sectionTitle" sx={{ mr: 2 }}>
        모집중인 스터디
      </Text>
      <BasicTab.List>
        <BasicTab>신규</BasicTab>
        <BasicTab>인기</BasicTab>
      </BasicTab.List>
    </FlexBox>
    <BasicTab.Panels>
      <BasicTab.Panel>
        <RecruitingStudyCards sortBy="new" />
      </BasicTab.Panel>
      <BasicTab.Panel>
        <RecruitingStudyCards sortBy="popular" />
      </BasicTab.Panel>
    </BasicTab.Panels>
  </BasicTab.Group>
);

export default RecruitingStudies;
