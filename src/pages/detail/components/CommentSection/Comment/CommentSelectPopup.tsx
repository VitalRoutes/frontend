import SelectionPopup from '@/components/common/SelectionPopup';

interface Props {
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CommentSelectPopup({ id }: Props) {
  const deleteComment = () => {};
  const modifyComment = () => {};

  return (
    <SelectionPopup>
      <button type="button" onClick={deleteComment}>
        댓글 삭제
      </button>
      <button type="button" onClick={modifyComment}>
        댓글 삭제
      </button>
    </SelectionPopup>
  );
}

export default CommentSelectPopup;
