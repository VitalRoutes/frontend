import { useParams } from 'react-router-dom';
import Banner from '@/components/common/Banner';
import KaKaoMap from '../../components/units/KakaoMap';
import ImageSection from './components/ImageSection';
import DescSection from './components/DescSection';
import TagSection from './components/TagSection';
import CommentSection from './components/CommentSection';
import JoinButton from './components/JoinButton';
import CommentEditor from './components/CommentEditor';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';
import BearLoading from '@/components/common/Loading/BearLoading';
import { useLoginStore } from '@/store/user/loginInfoStore';

function ChallengeDetailPage() {
  const { isLogin, ...s } = useLoginStore();
  const { id } = useParams<{ id: string }>();
  const { data: challenge, isLoading } = useChallengeDetail(id || '0');
  console.log(isLogin, s);

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <BearLoading />;
      </div>
    );
  if (!challenge) return <>데이터가 없다1</>;

  const spots = [
    {
      lat: challenge.startingPosLat,
      lng: challenge.startingPosLon,
    },
    {
      lat: challenge.stopOver1Lat,
      lng: challenge.stopOver1Lon,
    },
    {
      lat: challenge.stopOver2Lat,
      lng: challenge.stopOver2Lon,
    },
    {
      lat: challenge.stopOver3Lat,
      lng: challenge.stopOver3Lon,
    },
    {
      lat: challenge.destinationLat,
      lng: challenge.destinationLon,
    },
  ];

  return (
    <>
      <Banner
        title={challenge.challengeTitle}
        subTitle={`${challenge.totalComments}명이 참가중`}
        imgSrc={challenge.storedTitleImageName}
        moreInfo={{
          profileImge: challenge.storedTitleImageName,
          nickname: challenge.challengeWriter || '',
          view: challenge.boardHits || 0,
          comment: challenge.totalComments || 0,
          like: 0,
        }}
      />
      <div className="mx-auto flex w-[940px] flex-col items-center">
        <div className="my-[120px] flex w-full flex-col items-center  gap-[52px]">
          <div className="h-[360px] w-full overflow-hidden rounded-[30px]">
            <KaKaoMap spots={spots} />
          </div>
          <ImageSection />
          <DescSection />
          <TagSection />
          <div className="flex w-full flex-col items-end gap-[56px]">
            <button type="button" className="text-gray-3 hover:underline">
              게시글 신고하기
            </button>
            {isLogin ? (
              <>
                <CommentEditor />
                <CommentSection className="my-[120px]" />
              </>
            ) : (
              <JoinButton />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeDetailPage;
