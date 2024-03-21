import {
  GetNextPageParamFunction,
  useInfiniteQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';
import { Challenge } from '@/types/challenge';

function useChallengeListInfinite() {
  const queryKey = [QUERY_KEY.challengeList];

  const queryFn = async (lastBoardId: number) => {
    const { data } = await axios.get<Challenge[]>(
      `/board/scroll?lastBoardId=${lastBoardId}`,
    );

    return data;
  };
  const getNextPageParam: GetNextPageParamFunction<number, Challenge[]> = (
    challenges,
  ) => {
    const { length } = challenges;
    if (length < 12) return undefined;
    const boardIds = challenges.map((challenge) => challenge.boardId);
    const minBoardId = Math.min(...boardIds);
    return minBoardId;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }) => queryFn(pageParam),
    initialPageParam: 0,
    getNextPageParam,
  });
}

export default useChallengeListInfinite;
