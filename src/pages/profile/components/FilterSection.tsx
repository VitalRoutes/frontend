import Button from '@/components/common/Button';
import { useFilterStore } from '@/store/profileStore';

function FilterSection() {
  const ACTIVE_COLOR = 'bg-gray-1 text-gray-8';
  const { filter, setFilter } = useFilterStore();

  return (
    <div className="flex items-center justify-center gap-[16px]">
      <Button
        variant="tab-a"
        className={filter === 'myChallenge' ? ACTIVE_COLOR : undefined}
        onClick={() => setFilter('myChallenge')}
      >
        나의 챌린지
      </Button>
      <Button
        variant="tab-a"
        className={filter === 'participated' ? ACTIVE_COLOR : undefined}
        onClick={() => setFilter('participated')}
      >
        참여 중인 챌린지
      </Button>
      <Button
        variant="tab-a"
        className={filter === 'liked' ? ACTIVE_COLOR : undefined}
        onClick={() => setFilter('liked')}
      >
        좋아요한 챌린지
      </Button>
      <Button
        variant="tab-a"
        className={filter === 'bookmarked' ? ACTIVE_COLOR : undefined}
        onClick={() => setFilter('bookmarked')}
      >
        북마크한 챌린지
      </Button>
    </div>
  );
}

export default FilterSection;
