import Button from '@/components/common/Button';

function ProfileSection() {
  return (
    <div className="mb-[100px] flex items-center justify-center gap-[52px] py-[120px]">
      <img
        className="h-[204px] w-[204px] rounded-full bg-gray-200"
        src="#"
        alt="profile"
      />
      <div>
        <div className="mb-[12px] text-[32px] font-bold leading-[120%]">
          nickname
        </div>
        <div className="mb-[42px] text-[24px] leading-[160%]">region</div>
        <Button variant="third-d">프로필 수정</Button>
      </div>
    </div>
  );
}

export default ProfileSection;
