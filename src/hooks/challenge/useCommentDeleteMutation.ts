import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useCommentDeleteMutation(challengeId: number) {
  const mutationFn = () => axios.delete(`/participation/view/${challengeId}`);
  const onSuccess = () => {};

  return useMutation({ mutationFn, onSuccess });
}

export default useCommentDeleteMutation;
