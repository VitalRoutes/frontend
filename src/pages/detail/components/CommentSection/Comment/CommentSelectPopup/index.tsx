import SelectionPopup from '@/components/common/SelectionPopup';
import useCommentDeleteMutation from '@/hooks/challenge/useCommentDeleteMutation';
import useCommentModifyMutation from '@/hooks/challenge/useCommentModifyMutation';
import usePopup from '@/hooks/usePopup';
import DeletePopup from './DeletePopup';
import { useCommentModeStore } from '@/store/challenge/commentStore';

interface Props {
  id: number;
}

function CommentSelectPopup({ id }: Props) {
  const { mutate: mutateDeletion } = useCommentDeleteMutation(id);
  const { mode, setMode } = useCommentModeStore();

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
    setMode('modify');
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
