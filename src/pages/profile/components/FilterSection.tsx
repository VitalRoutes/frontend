import Button from '@/components/common/Button';
import { useFilterStore } from '@/store/profileStore';

function FilterSection() {
  const { setFilter } = useFilterStore();

  return (
    <div className="flex items-center justify-center gap-[16px]">
      <Button variant="tab-a" onClick={() => setFilter('myChallenge')}>
        나의 챌린지
      </Button>
      <Button variant="tab-a" onClick={() => setFilter('participated')}>
        참여 중인 챌린지
      </Button>
      <Button variant="tab-a" onClick={() => setFilter('liked')}>
        좋아요한 챌린지
      </Button>
      <Button variant="tab-a" onClick={() => setFilter('bookmarked')}>
        북마크한 챌린지
      </Button>
    </div>
  );
}

export default FilterSection;
