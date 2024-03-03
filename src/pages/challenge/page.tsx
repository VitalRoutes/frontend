import Banner from '@/components/common/Banner';
import TagSection from './components/TagSection';
import SectionTitle from '@/components/common/SectionTitle';
import ChallengeListSection from './components/ChallengeListSection';
import { BASE_IMG_SRC } from '@/constants/src';
import MoreButton from '../../components/units/MoreButton';

function ChallengeListPage() {
  return (
    <>
      <Banner
        title={`Share,\nParticipate,\nTalk`}
        subTitle="With VitalRoutes"
        imgSrc={`${BASE_IMG_SRC}/banner/cycling.png`}
      />
      <div className="my-[62px] flex flex-col items-center gap-[62px] xl:my-[120px]">
        <TagSection />
        <SectionTitle title="신규 챌린지" subTitle="New Chanllenge" />
        <ChallengeListSection />
        <MoreButton />
      </div>
    </>
  );
}

export default ChallengeListPage;
