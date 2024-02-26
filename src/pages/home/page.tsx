import Banner from '@/components/common/Banner';
import HealthCareSection from './components/HealthCareSection';
import IntroSection from './components/IntroSection';
import RegisterSection from './components/RegisterSection';
import SlideSection from './components/SlideSection';

function HomePage() {
  return (
    <div className="mb-[160px] flex flex-col items-center gap-[62px] xl:mb-[62px]">
      <Banner title={`Move,\nConnect,\nThrive`} subTitle="With VitalRoutes" />
      <IntroSection />
      <SlideSection />
      <RegisterSection />
      <HealthCareSection />
    </div>
  );
}

export default HomePage;
