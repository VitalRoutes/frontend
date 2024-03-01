import { useState } from 'react';
import Icon from '@/components/icons';

interface Props {
  imgSrc: string;
  title: string;
  people: number;
  onClick: () => void;
}

function ChallengeCard({ onClick, imgSrc, title, people }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative flex h-[256px] w-[318px] cursor-pointer flex-col items-center overflow-hidden rounded-[30px] bg-gradient-to-r from-black/20 to-black/0 hover:from-black/40 hover:to-black/0"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick();
      }}
      role="link"
      tabIndex={0}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className="absolute left-0 top-0 -z-10"
        src={imgSrc}
        alt="challenge card"
      />
      <div className="flex flex-[1_0_0] items-start gap-[10px] p-[32px_16px_0_24px]">
        <h1 className=" line-clamp-2 w-[228px] break-keep text-[24px] font-bold  leading-[160%] text-white">
          {title}
        </h1>
        <Icon.Kebab />
      </div>
      {isHover && (
        <div className="flex items-center justify-between self-stretch p-[24px]">
          <span className="text-sm font-normal text-white">
            {people}명이 참가중
          </span>
          <div className="flex gap-[8px]">
            <button
              className="group rounded-full bg-gray-1/30 p-[16px] backdrop-blur hover:bg-green-1"
              type="button"
              aria-label="like"
            >
              <Icon.Bookmark className="h-[32px] w-[32px]  fill-gray-50 group-hover:fill-gray-1" />
            </button>
            <button
              className="group rounded-full bg-gray-1/30 p-[16px] backdrop-blur hover:bg-green-1"
              type="button"
              aria-label="book mark"
            >
              <Icon.Like className="h-[32px] w-[32px]  fill-gray-50  group-hover:fill-gray-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallengeCard;
