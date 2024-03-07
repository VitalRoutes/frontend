import { useNavigate } from 'react-router-dom';
import ChallengeCard from './ChallengeCard';
import { getImageUrl } from '@/utils/getImageUrl';

function ChallengeListSection() {
  const TEMP_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigate = useNavigate();

  if (!TEMP_DATA)
    return (
      <img src={getImageUrl('picture/none_contents.png')} alt="none-contents" />
    );

  return (
    <div>
      <div className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {TEMP_DATA.map((val) => (
          <ChallengeCard
            key={val}
            imgSrc={getImageUrl('intro/intro_1.png')}
            title="봄의 전령, 튤립 거리 탐방 챌린지 참여하고 봄맞이 하세요!"
            people={10}
            onClick={() => navigate(`/challenge/${val}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChallengeListSection;
