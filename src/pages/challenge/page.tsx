import { Suspense } from 'react';
import Banner from '@/components/common/Banner';
import TagSection from './components/TagSection';
import SectionTitle from '@/components/common/SectionTitle';
import ChallengeListSection from './components/ChallengeListSection';

function ChallengeListPage() {
  return (
    <div className="flex flex-col items-center gap-[62px]">
      <Banner
        title={`Share,\nParticipate,\nTalk`}
        subTitle="With VitalRoutes"
      />
      <TagSection />
      <SectionTitle title="신규 챌린지" subTitle="New Chanllenge" />
      <Suspense>
        <ChallengeListSection />
      </Suspense>
    </div>
  );
}

export default ChallengeListPage;
