import ChallengeSection from './components/ChallengeSection';
import FilterSection from './components/FilterSection';
import ProfileSection from './components/ProfileSection';

function ProfilePage() {
  return (
    <div>
      <div className="mx-auto my-[120px] w-[1352px]">
        <ProfileSection />
        <FilterSection />
        <hr className="my-[62px]" />
        <ChallengeSection />
      </div>
    </div>
  );
}

export default ProfilePage;
