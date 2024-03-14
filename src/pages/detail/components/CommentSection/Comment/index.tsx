import { MouseEventHandler } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CommentSkeleton from './CommentSkeleton';
import useSelectionPopup from '@/hooks/useSelectionPopup';
import SelectButton from '@/components/units/Select';
import CommentSelectPopup from './CommentSelectPopup';
import { useCommentModeStore } from '@/store/challenge/commentStore';
import ModifyInput from './ModifyInput';
import useCommentModifyMutation from '@/hooks/challenge/useCommentModifyMutation';

interface Props {
  profileImgSrc: string;
  nickname: string;
  content: string;
  date: string;
  id: number;
}

function Comment({ id, profileImgSrc, nickname, content, date }: Props) {
  const { openSelectionPopup } = useSelectionPopup();
  const { mode, setMode } = useCommentModeStore();
  const { mutate: mutateModify } = useCommentModifyMutation(id);
  const methods = useForm({
    defaultValues: {
      comment: content,
    },
  });

  const showMoreOption: MouseEventHandler<HTMLButtonElement> = ({
    clientX,
    clientY,
  }) => {
    openSelectionPopup({
      selectionPopup: <CommentSelectPopup id={id} />,
      x: clientX,
      y: clientY,
    });
  };

  const confirmModify = () => {
    const comment = methods.getValues('comment');
    mutateModify({ comment });
  };

  const cancelModify = () => {
    setMode('view');
  };

  return (
    <FormProvider {...methods}>
      <div className="flex justify-between gap-2">
        <img
          className="h-[53px] w-[53px] rounded-full bg-gray-5 object-cover"
          src={profileImgSrc}
          alt="profile"
        />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="font-bold">{nickname}</span>
            <span className="text-[13px] text-gray-2">{date}</span>

            <SelectButton onClick={showMoreOption} />
          </div>
          <p className="text-sm">{content}</p>
          {mode === 'modify' && (
            <ModifyInput
              onCancelClick={cancelModify}
              onConfirmClick={confirmModify}
            />
          )}
        </div>
      </div>
    </FormProvider>
  );
}

Comment.Skeleton = CommentSkeleton;

export default Comment;
