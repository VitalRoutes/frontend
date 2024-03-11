import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { CommentWriteRequest } from '@/types/challenge';

export default function useCommentWriteMutation() {
  const mutationFn = ({ files, boardId, content }: CommentWriteRequest) => {
    const formData = new FormData();

    if (files) {
      files.forEach((file) => formData.append('files', file));
    }
    formData.append('boardId', boardId);
    formData.append('content', content);
    return axios.postForm('/participation/save', formData);
  };

  return useMutation({
    mutationFn,
  });
}
