import Banner from '@/components/common/Banner';
import KaKaoMap from './components/KakaoMap';
import Spot from '@/components/common/Spot';

function ChallengeDetailPage() {
  const MORE_INFO = {
    profileImge: 'test',
    nickname: 'test',
    view: 0,
    comment: 0,
    like: 0,
  };

  return (
    <>
      <Banner
        title="title"
        subTitle="subtitle"
        imgSrc="#"
        moreInfo={MORE_INFO}
      />
      <div className="mt-[120px] flex flex-col items-center gap-[52px] ">
        <div className="h-[360px] w-[940px] overflow-hidden rounded-[30px]">
          <KaKaoMap />
        </div>
        <Spot camera label="Spot 1" />
        <Spot label="Spot 1" />
      </div>
    </>
  );
}

export default ChallengeDetailPage;
