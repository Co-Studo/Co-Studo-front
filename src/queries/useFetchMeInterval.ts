import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { 분 } from '@utils/units';
import { AxiosError } from 'axios';

import { ServerResponse } from '@apis/http';
import { fetchMe, UserEntity } from '@apis/user';

const accessTokenExpireIn = 분(5);

const useFetchMeInterval = (
  options?: UseQueryOptions<
    ServerResponse<UserEntity>,
    AxiosError,
    ServerResponse<UserEntity>,
    ['fetchMe']
  >,
): UseQueryResult<ServerResponse<UserEntity>, AxiosError> =>
  useQuery(['fetchMe'], fetchMe, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: accessTokenExpireIn,
    retry: 0,
    useErrorBoundary: true,
    ...options,
  });

export default useFetchMeInterval;
