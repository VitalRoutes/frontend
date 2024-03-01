import { twMerge } from 'tailwind-merge';
import Icon from '@/components/icons';
import { MoreInfo } from '@/types';

interface BannerMoreInfoProps extends MoreInfo {
  className?: string;
}

function BannerMoreInfo({
  profileImge,
  nickname,
  view,
  comment,
  like,
  className,
}: BannerMoreInfoProps) {
  return (
    <div className={twMerge('flex justify-between', className)}>
      <div className="flex items-center gap-[8px] rounded-full bg-black/50 p-[8px] pr-[60px] text-gray-50 backdrop-blur">
        <img
          className="h-[38px] w-[38px] rounded-full"
          src={profileImge}
          alt="author"
        />
        <div>{nickname}</div>
      </div>

      <div className="flex items-center gap-[32px] text-gray-50">
        <div className="flex gap-[16px] ">
          <div className="flex items-center gap-[8px]">
            <Icon.View className="fill-gray-50" />
            {view}
          </div>
          <div className="flex items-center gap-[8px]">
            <Icon.Comment className="fill-gray-50" />
            {comment}
          </div>
          <div className="flex items-center gap-[8px]">
            <Icon.Heart className="fill-gray-50" />
            {like}
          </div>
        </div>

        <div className="flex gap-[16px]">
          <button
            className="group rounded-full bg-gray-1/30 p-[12px] hover:bg-gray-11"
            type="button"
            aria-label="bookmark"
          >
            <Icon.Bookmark className="h-[40px] w-[40px] fill-gray-11 group-hover:fill-gray-1" />
          </button>
          <button
            className="group rounded-full bg-gray-1/30 p-[12px] hover:bg-gray-11"
            type="button"
            aria-label="bookmark"
          >
            <Icon.Like className="h-[40px] w-[40px] fill-gray-11 group-hover:fill-gray-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerMoreInfo;
