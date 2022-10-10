import http from '@apis/http';
import { UserEntity } from '@apis/user';

type TagEntity = {
  id: number;
  name: string;
};

export type StudyEntity = {
  id: number;
  owner: UserEntity;
  participants: UserEntity[];
  title: string;
  description?: string;
  tags: TagEntity[];
  isPublic: boolean;
  isRecruiting: boolean;
  isBookmarked: boolean;
  isRequireCheckIn: boolean;
  isRequireCheckOut: boolean;
  isCheckOutRequireArticle: boolean;
  checkInRangeStart?: string;
  checkInRangeEnd: string;
  checkOutRangeStart?: string;
  checkOutRangeEnd?: string;
};

export const fetchMyStudies = () =>
  http.get<StudyEntity[]>(`__API_END_POINT__/study/mine`, {
    withCredentials: true,
  });
