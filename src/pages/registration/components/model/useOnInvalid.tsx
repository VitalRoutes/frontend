import { SubmitErrorHandler } from 'react-hook-form';
import Button from '@/components/common/Button';
import Popup from '@/components/common/Popup';
import usePopup from '@/hooks/usePopup';
import { ChallengeRegisterationForm } from '@/types/posts';

function useOnInvalid() {
  const { openPopup, closePopup } = usePopup();

  const onInvalid: SubmitErrorHandler<ChallengeRegisterationForm> = ({
    title,
    titleImage,
    contents,
    transportation,
    spots,
  }) => {
    const errorMessage =
      titleImage?.message ||
      title?.message ||
      contents?.message ||
      transportation?.message ||
      spots?.at?.(0)?.files?.message ||
      spots?.at?.(1)?.files?.message ||
      null;

    if (errorMessage) {
      openPopup(
        <Popup
          content={errorMessage}
          buttons={
            <Button variant="popup-point" onClick={closePopup}>
              확인
            </Button>
          }
        />,
      );
      return;
    }
    openPopup(
      <Popup
        content="알 수 없는 오류로 등록에 실패했습니다."
        buttons={
          <Button variant="popup-point" onClick={closePopup}>
            확인
          </Button>
        }
      />,
    );
  };

  return onInvalid;
}

export default useOnInvalid;
