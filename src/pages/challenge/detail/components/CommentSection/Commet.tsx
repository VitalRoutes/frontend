import Icon from '@/components/icons';

interface Props {
  profileImgSrc: string;
  nickname: string;
  content: string;
  date: string;
}

function Comment({ profileImgSrc, nickname, content, date }: Props) {
  return (
    <div>
      <div className="flex justify-between gap-2">
        <img
          className="h-[53px] w-[53px] rounded-full bg-gray-5"
          src={profileImgSrc}
          alt="profile"
        />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="font-bold">{nickname}</span>
            <span className="text-[13px] text-gray-2">{date}시간 전</span>
            <Icon.Kebab className="ml-auto mr-0 h-[32px] w-[32px] fill-gray-1" />
          </div>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
