import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ServerResponse } from '@apis/http';
import { fetchMe, UserEntity } from '@apis/user';
import { minute } from '@utils/units';

const accessTokenExpireIn = minute(5);

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
