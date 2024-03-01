import Banner from '@/components/common/Banner';
import KaKaoMap from './components/KakaoMap';

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
      </div>
    </>
  );
}

export default ChallengeDetailPage;
