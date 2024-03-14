import Button from '@/components/common/Button';
import Popup from '@/components/common/Popup';

interface Props {
  onConfirmClick: () => void;
  onCancleClick: () => void;
}

function DeletePopup({ onConfirmClick, onCancleClick }: Props) {
  return (
    <Popup
      contents={
        <div className="flex flex-col gap-[12px]">
          <div className="text-[20px] font-bold">
            작성한 댓글을 삭제하시겠습니까?
          </div>
          <div>확인을 선택하면, 해당 댓글이 보이지 않게 됩니다.</div>
        </div>
      }
      buttons={
        <>
          <Button variant="popup" onClick={onCancleClick}>
            취소
          </Button>
          <Button variant="popup-point" onClick={onConfirmClick}>
            확인
          </Button>
        </>
      }
    />
  );
}

export default DeletePopup;
