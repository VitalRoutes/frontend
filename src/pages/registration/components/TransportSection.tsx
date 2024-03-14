import { twMerge } from 'tailwind-merge';
import Button from '@/components/common/Button';
import Icon from '@/components/icons';

function TransportSection() {
  const ACTIVE_COLOR = 'bg-green-1';

  return (
    <div>
      <div className="leadin-[150%] mb-[32px] font-bold">
        이동 방법을 선택해주세요.
      </div>
      <div className="flex gap-2">
        <Button variant="tag-a" className="flex gap-[4px]">
          <Icon.Walk />
          도보
        </Button>
        <Button
          variant="tag-a"
          className={twMerge('flex gap-[4px]', ACTIVE_COLOR)}
        >
          <Icon.Bicycle />
          자전거
        </Button>
      </div>
    </div>
  );
}

export default TransportSection;
