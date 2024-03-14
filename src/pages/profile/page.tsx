import ChallengeSection from './components/ChallengeSection';
import FilterSection from './components/FilterSection';
import ProfileSection from './components/ProfileSection';

function ProfilePage() {
  return (
    <div>
      <ProfileSection />
      <div className="flex flex-col flex-nowrap items-center gap-[32px] px-[21px] pb-[62px] xl:gap-[62px] xl:pb-[120px] xl:pt-[100px]">
        <FilterSection />
        <hr className="w-full" />
        <ChallengeSection />
      </div>
    </div>
  );
}

export default ProfilePage;
