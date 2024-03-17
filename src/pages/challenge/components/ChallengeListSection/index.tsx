import { Link, useNavigate } from 'react-router-dom';
import { getImageUrl } from '@/utils/getImageUrl';
import ChallengeCard from '@/components/units/ChallengeCard';
import useChallengeList from '@/hooks/challenge/useChallengeList';
import BearLoading from '@/components/common/Loading/BearLoading';
import Button from '@/components/common/Button';

function ChallengeListSection() {
  const { data, isLoading } = useChallengeList();
  const navigate = useNavigate();

  if (isLoading) {
    return <BearLoading />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center gap-[62px]">
        <div className="flex flex-col items-center gap-[16px]">
          <img
            className="mb-[16px]"
            src={getImageUrl('picture/none_contents.png')}
            alt="none-contents"
          />
          <div className="text-[24px] font-bold">등록된 챌린지가 없습니다.</div>
        </div>
        <Link to="/challenge/registration">
          <Button variant="third-c">챌린지 등록하러 가기</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
      {data.map(
        ({ boardId, storedTitleImageName, challengeTitle, boardParty }) => (
          <ChallengeCard
            key={boardId}
            imgSrc={storedTitleImageName}
            title={challengeTitle}
            people={boardParty}
            onClick={() => {
              navigate(`/challenge/${String(boardId)}`);
            }}
          />
        ),
      )}
    </div>
  );
}

export default ChallengeListSection;
