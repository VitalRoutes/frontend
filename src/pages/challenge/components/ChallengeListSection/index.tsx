import { useNavigate } from 'react-router-dom';
import ChallengeCard from './ChallengeCard';
import { getImageUrl } from '@/utils/getImageUrl';
import useChallengeList from '@/hooks/challenge/useChallengeList';

function ChallengeListSection() {
  const { data } = useChallengeList();
  const navigate = useNavigate();

  if (!data)
    return (
      <img src={getImageUrl('picture/none_contents.png')} alt="none-contents" />
    );

  return (
    <div>
      <div className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {data.map(
          ({ storedTitleImageName, challengeTitle, boardParty }, idx) => (
            <ChallengeCard
              // id 수정 될떄까지 임시 eslint disable
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              imgSrc={storedTitleImageName}
              title={challengeTitle}
              people={boardParty}
              onClick={() => navigate(`/challenge/${idx + 1}`)}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default ChallengeListSection;
