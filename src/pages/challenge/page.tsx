import Banner from '@/components/common/Banner';
import TagSection from './components/TagSection';

function ChallengeListPage() {
  return (
    <div className="flex flex-col gap-[62px]">
      <Banner
        title={`Share,\nParticipate,\nTalk`}
        subTitle="With VitalRoutes"
      />
      <TagSection />
    </div>
  );
}

export default ChallengeListPage;
