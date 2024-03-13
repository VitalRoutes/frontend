import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CommentWriteRequest } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';

export default function useCommentWriteMutation(boardId: string) {
  const queryClient = useQueryClient();

  const mutationFn = ({
    files,
    content,
  }: Omit<CommentWriteRequest, 'boardId'>) => {
    const formData = new FormData();

    if (files) {
      files.forEach((file) => formData.append('files', file));
    }
    formData.append('boardId', boardId);
    formData.append('content', content);
    return axios.postForm('/participation/save', formData);
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.comment, boardId] });
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
}
