import { MouseEventHandler } from 'react';
import CommentSkeleton from './CommentSkeleton';
import useSelectionPopup from '@/hooks/useSelectionPopup';
import SelectButton from '@/components/units/Select';
import CommentSelectPopup from './CommentSelectPopup';

interface Props {
  profileImgSrc: string;
  nickname: string;
  content: string;
  date: string;
  id: number;
}

function Comment({ id, profileImgSrc, nickname, content, date }: Props) {
  const { openSelectionPopup } = useSelectionPopup();

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

  return (
    <div>
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
        </div>
      </div>
    </div>
  );
}

Comment.Skeleton = CommentSkeleton;

export default Comment;
