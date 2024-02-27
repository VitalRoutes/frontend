import Icon from '@/components/icons';

function MoreButton() {
  return (
    <button
      type="button"
      className="flex gap-[8px] font-bold leading-[150%] text-gray-3"
    >
      SEE MORE
      <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-4 p-[3px]">
        <Icon.DownArrow fill="white" />
      </div>
    </button>
  );
}

export default MoreButton;
