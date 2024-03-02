import Banner from '@/components/common/Banner';
import KaKaoMap from './components/KakaoMap';
import ImageSection from './components/ImageSection';
import DescSection from './components/DescSection';
import TagSection from './components/TagSection';

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
      <div className="mx-auto mt-[120px] flex w-[940px] flex-col items-center  gap-[52px]">
        <div className="h-[360px] w-full overflow-hidden rounded-[30px]">
          <KaKaoMap />
        </div>
        <ImageSection />
        <DescSection />
        <TagSection />
      </div>
    </>
  );
}

export default ChallengeDetailPage;