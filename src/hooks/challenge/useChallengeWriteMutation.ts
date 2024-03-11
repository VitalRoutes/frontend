import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ChallengeRegistrationRequest } from '@/types/challenge';

export default function useChallengeWriteMutation() {
  const mutationFn = async (data: ChallengeRegistrationRequest) =>
    axios.post('/board/save', data);

  return useMutation({ mutationFn });
}
