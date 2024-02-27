import Banner from '@/components/common/Banner';
import HealthCareSection from './components/HealthCareSection';
import IntroSection from './components/IntroSection';
import RegisterSection from './components/RegisterSection';
import SlideSection from './components/SlideSection';
import { BASE_IMG_SCR } from '@/constants/src';

function HomePage() {
  return (
    <div className="mb-[62px] flex flex-col items-center gap-[62px]  xl:mb-[160px] xl:gap-[160px]">
      <Banner
        title={`Move,\nConnect,\nThrive`}
        subTitle="With VitalRoutes"
        imgSrc={`${BASE_IMG_SCR}/banner/running.png`}
      />
      <IntroSection />
      <SlideSection />
      <RegisterSection />
      <HealthCareSection />
    </div>
  );
}

export default HomePage;
