import http from '@apis/http';
import { UserEntity } from '@apis/user';
import { FbaseDate } from '@mocks/constants/date';

type TagEntity = {
  id: number;
  name: string;
};

type SortCriterion = 'new' | 'popular';

export type StudyEntity = {
  id: string;
  owner: UserEntity;
  participants: UserEntity[];
  applicants: UserEntity[];
  title: string;
  shortDescription: string;
  description?: string;
  tags: TagEntity[];
  isPublic: boolean;
  isRecruiting: boolean;
  isBookmarked: boolean;
  isRequireCheckIn: boolean;
  isRequireCheckOut: boolean;
  isCheckOutIsArticle: boolean;
  checkInRangeStart?: string;
  checkInRangeEnd?: string;
  checkOutRangeStart?: string;
  checkOutRangeEnd?: string;
  createdAt: FbaseDate;
  updatedAt: FbaseDate;
};

export const fetchMyStudies = () =>
  http.get<StudyEntity[]>(`__API_END_POINT__/study/mine`, {
    withCredentials: true,
  });

export const fetchStudyDetail = (studyId: string) =>
  http.get<StudyEntity>(`__API_END_POINT__/study/${studyId}`, {
    withCredentials: true,
  });

export const fetchRecruitingStudies = (sortCriterion: SortCriterion) =>
  http.get<StudyEntity[]>(
    `__API_END_POINT__/study?recruiting=true${
      sortCriterion ? `&sort=${sortCriterion}` : ''
    }`,
  );
