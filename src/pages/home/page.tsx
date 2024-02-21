import IntroSection from './components/IntroSection';
import VideoSection from './components/VideoSection';

function HomePage() {
  return (
    <div>
      <VideoSection />
      <IntroSection className=" mt-[200px]" />
    </div>
  );
}

export default HomePage;
