import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import useCommentModifyMutation from '@/hooks/challenge/useCommentModifyMutation';
import usePopup from '@/hooks/usePopup';
import DeletePopup from './DeletePopup';

interface Props {
  id: number;
}

function CommentSelectPopup({ id }: Props) {
  const { mutate: mutateModification } = useCommentModifyMutation(id);
  const { mutate: mutateDeletion } = useCommentDeleteMutation(id);

  const { openPopup, closePopup } = usePopup();
  const deleteComment = () => {
    openPopup(
      <DeletePopup
        onCancleClick={closePopup}
        onConfirmClick={mutateDeletion}
      />,
    );
  };

  const modifyComment = () => {
    mutateModification();
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
