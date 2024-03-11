import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Comment } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';

export default function useComment(challengeId: string) {
  const queryKey = [QUERY_KEY, challengeId];

  const queryFn = async () => {
    const { data } = await axios.get<{ data: Comment }>(
      `/participation/view/${challengeId}`,
    );
    return data.data;
  };

  return useQuery({ queryKey, queryFn });
}
