import Icon from '@/components/icons';

interface Props {
  onClick?: () => void;
}

function MoreButton({ onClick }: Props) {
  return (
    <button
      type="button"
      className="flex gap-[8px] font-bold leading-[150%] text-gray-3"
      onClick={onClick}
    >
      SEE MORE
      <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-4 p-[3px]">
        <Icon.DownArrow fill="white" />
      </div>
    </button>
  );
}

export default MoreButton;
