import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function useCommentModifyMutation(challengeId: number) {
  const mutationFn = () => axios.patch(`/participation/view/${challengeId}`);
  const onSuccess = () => {};

  return useMutation({ mutationFn, onSuccess });
}

export default useCommentModifyMutation;
