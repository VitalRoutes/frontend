import Button from '@/components/common/Button';

function ButtonSection() {
  return (
    <section className="flex w-full flex-col gap-[56px] ">
      <button className="self-end text-gray-3 hover:underline " type="button">
        게시글 신고하기
      </button>
      <Button>챌린지 참여하기</Button>
    </section>
  );
}

export default ButtonSection;
