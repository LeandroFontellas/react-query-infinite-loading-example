import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axios';
import { IPlanetsResponse } from '../types/planet';

type IGetPlanetsProps = {
  pageParam?: number;
};

const getPlanets = async ({ pageParam = 1 }: IGetPlanetsProps) => {
  const { data } = await axiosInstance.get<IPlanetsResponse>(
    `/planets?page=${pageParam}`,
  );

  return data;
};

const useInfinitePlanetsQuery = () => {
  return useInfiniteQuery(
    ['INFINITE-PLANETS'],
    ({ pageParam }) => getPlanets({ pageParam }),
    {
      getNextPageParam: lastPage => {
        if (lastPage.next) {
          const nextUrl = new URLSearchParams(new URL(lastPage.next).search);
          const nextCursor = nextUrl.get('page');
          if (nextCursor) {
            return Number(nextCursor);
          }
        }
        return undefined;
      },
    },
  );
};

export { useInfinitePlanetsQuery };
