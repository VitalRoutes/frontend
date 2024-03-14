import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useCommentModifyMutation(challengeId: number) {
  const mutationFn = (data: { comment: string }) =>
    axios.patch(`/participation/${challengeId}`, data);
  const onSuccess = () => {};

  return useMutation({ mutationFn, onSuccess });
}

export default useCommentModifyMutation;
