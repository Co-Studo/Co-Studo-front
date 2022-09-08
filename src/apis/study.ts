import http from '@apis/http';
import { UserEntity } from '@apis/user';

type TechStackEntity = {
  id: number;
  name: string;
  imageUrl: string;
};

export type StudyEntity = {
  id: number;
  users: UserEntity[];
  title: string;
  description?: string;
  techStacks: TechStackEntity[];
  checkInRangeStart?: string;
  checkInRangeEnd: string;
  checkOutRangeStart?: string;
  checkOutRangeEnd: string;
};

export const fetchMyStudies = () =>
  http.get<StudyEntity[]>(`__API_END_POINT__/api/study/mine`, {
    withCredentials: true,
  });
