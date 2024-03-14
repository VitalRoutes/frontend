import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import useCommentModifyMutation from '@/hooks/challenge/useCommentModifyMutation';

interface Props {
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CommentSelectPopup({ id }: Props) {
  const { mutate: mutateModification } = useCommentModifyMutation(id);
  const { mutate: mutateDeletion } = useCommentDeleteMutation(id);

  const deleteComment = () => {
    mutateModification();
  };
  const modifyComment = () => {
    mutateDeletion();
  };

  return (
    <SelectionPopup>
      <button type="button" onClick={modifyComment}>
        댓글 수정
      </button>
      <button type="button" onClick={deleteComment}>
        댓글 삭제
      </button>
    </SelectionPopup>
  );
}

export default CommentSelectPopup;
