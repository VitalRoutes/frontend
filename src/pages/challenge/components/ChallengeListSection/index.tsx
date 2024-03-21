import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getImageUrl } from '@/utils/getImageUrl';
import ChallengeCard from '@/components/units/ChallengeCard';
import BearLoading from '@/components/common/Loading/BearLoading';
import Button from '@/components/common/Button';
import useChallengeListInfinite from '@/hooks/challenge/useChallengeListInfinite';

function ChallengeListSection() {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useChallengeListInfinite();
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  const allData = data?.pages.flat();

  if (isLoading) {
    return <BearLoading />;
  }

  if (!allData || allData.length === 0) {
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
    <>
      <div className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {allData.map(
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
      {hasNextPage && (
        <div
          className="grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4"
          ref={ref}
        >
          <ChallengeCard.Skeleton />
          <ChallengeCard.Skeleton />
          <ChallengeCard.Skeleton />
          <ChallengeCard.Skeleton />
        </div>
      )}
    </>
  );
}

export default ChallengeListSection;
