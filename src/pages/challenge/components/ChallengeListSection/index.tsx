import { useNavigate } from 'react-router-dom';
import { BASE_IMG_SCR } from '@/constants/src';
import ChallengeCard from './ChallengeCard';

function ChallengeListSection() {
  const TEMP_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigate = useNavigate();

  if (!TEMP_DATA)
    return (
      <img src={`${BASE_IMG_SCR}/none_contents.png`} alt="none-contents" />
    );

  return (
    <div>
      <div className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {TEMP_DATA.map((val) => (
          <ChallengeCard
            key={val}
            imgSrc={`${BASE_IMG_SCR}/intro_1.png`}
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
