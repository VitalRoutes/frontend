import Banner from '@/components/common/Banner';
import TagSection from './components/TagSection';
import SectionTitle from '@/components/common/SectionTitle';
import ChallengeListSection from './components/ChallengeListSection';
import { BASE_IMG_SCR } from '@/constants/src';

function ChallengeListPage() {
  return (
    <div className="flex flex-col items-center gap-[62px]">
      <Banner
        title={`Share,\nParticipate,\nTalk`}
        subTitle="With VitalRoutes"
        imgSrc={`${BASE_IMG_SCR}/banner/cycling.png`}
      />
      <TagSection />
      <SectionTitle title="신규 챌린지" subTitle="New Chanllenge" />
      <ChallengeListSection />
    </div>
  );
}

export default ChallengeListPage;
