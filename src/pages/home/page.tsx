import IntroSection from './components/IntroSection';
import SlideSection from './components/SlideSection';
import VideoSection from './components/VideoSection';

function HomePage() {
  return (
    <div>
      <VideoSection />
      <IntroSection className="mt-[200px]" />
      <SlideSection className="mt-[160px]" />
    </div>
  );
}

export default HomePage;
