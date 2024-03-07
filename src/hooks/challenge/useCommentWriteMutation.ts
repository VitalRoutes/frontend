import { useMutation } from '@tanstack/react-query';
import API from '@/utils/fetch';
import { CommentWriteRequest } from '@/types/challenge';

export default function useCommentWriteMutation() {
  const mutationFn = ({ files, boardId, content }: CommentWriteRequest) => {
    const formData = new FormData();
    const boardIdBlob = new Blob([boardId], { type: 'application/json' });
    const contentBlob = new Blob([content], { type: 'application/json' });

    if (files) {
      files.forEach((file) => formData.append('files', file));
    }
    formData.append('boardId', boardIdBlob);
    formData.append('content', contentBlob);
    return API.postForm<null>('/participation/save', formData);
  };

  return useMutation({
    mutationFn,
  });
}
