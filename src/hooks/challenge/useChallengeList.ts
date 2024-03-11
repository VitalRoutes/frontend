import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';
import { Challenge } from '@/types/challenge';

export default function useChallengeList() {
  const queryFn = async () => {
    const { data } = await axios.get<{ data: Challenge[] }>('/board/');
    return data.data;
  };

  const queryKey = [QUERY_KEY.challengeList];

  return useQuery({ queryKey, queryFn });
}
