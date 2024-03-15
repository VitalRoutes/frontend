import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '@/utils/getImageUrl';
import ChallengeCard from '@/components/units/ChallengeCard';
import useChallengeList from '@/hooks/challenge/useChallengeList';
import BearLoading from '@/components/common/Loading/BearLoading';

function ChallengeListSection() {
  const { data, isLoading } = useChallengeList();
  const navigate = useNavigate();

  if (isLoading) {
    return <BearLoading />;
  }

  if (!data || data.length === 0) {
    return (
      <img src={getImageUrl('picture/none_contents.png')} alt="none-contents" />
    );
  }

  console.log(data);

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
