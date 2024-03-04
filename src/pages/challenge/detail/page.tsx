import Banner from '@/components/common/Banner';
import KaKaoMap from './components/KakaoMap';
import ImageSection from './components/ImageSection';
import DescSection from './components/DescSection';
import TagSection from './components/TagSection';
import CommentSection from './components/CommentSection';
import JoinButton from './components/JoinButton';
import CommentEditor from './components/CommentEditor';

function ChallengeDetailPage() {
  const isLogin = true;
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
      <div className="mx-auto flex w-[940px] flex-col items-center">
        <div className=" my-[120px] flex flex-col items-center  gap-[52px]">
          <div className="h-[360px] w-full overflow-hidden rounded-[30px]">
            <KaKaoMap />
          </div>
          <ImageSection />
          <DescSection />
          <TagSection />
        </div>
        <div className="flex w-full flex-col items-end gap-[56px]">
          <button type="button" className="text-gray-3 hover:underline">
            게시글 신고하기
          </button>
          {isLogin ? <CommentEditor /> : <JoinButton />}
        </div>
        <CommentSection className="my-[120px]" />
      </div>
    </>
  );
}

export default ChallengeDetailPage;
