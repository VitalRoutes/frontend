import HealthCareSection from './components/HealthCareSection';
import IntroSection from './components/IntroSection';
import RegisterSection from './components/RegisterSection';
import SlideSection from './components/SlideSection';
import VideoSection from './components/VideoSection';

function HomePage() {
  return (
    <div className="mb-[160px] flex flex-col items-center gap-[62px] xl:mb-[62px]">
      <VideoSection />
      <IntroSection />
      <SlideSection />
      <RegisterSection />
      <HealthCareSection />
    </div>
  );
}

export default HomePage;
