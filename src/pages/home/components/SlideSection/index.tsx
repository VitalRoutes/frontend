import { twMerge } from 'tailwind-merge';
import SlideCard from './SlideCard';
import SectionTitle from '../../../../components/common/SectionTitle';
import { BASE_IMG_SCR } from '@/constants/src';

interface Props {
  className?: string;
}

function SlideSection({ className }: Props) {
  const cards1 = [0, 1, 2, 3, 4, 5].map((index) => (
    <SlideCard imgSrc={`${BASE_IMG_SCR}/slide/challenge_1_${index}.png`} />
  ));
  const cards2 = [0, 1, 2, 3, 4, 5].map((index) => (
    <SlideCard imgSrc={`${BASE_IMG_SCR}/slide/challenge_2_${index}.png`} />
  ));
  const ANIMATE_CLASS = {
    left: `animate-[slide-left_40s_linear_infinite]`,
    right: `animate-[slide-right_40s_linear_infinite]`,
  };

  return (
    <div
      className={twMerge(
        'flex w-max flex-col gap-[28px] overflow-hidden',
        className,
      )}
    >
      <SectionTitle
        title="챌린지에 참여해보세요."
        subTitle="challenge"
        href="/"
        className="mb-[32px] xl:mb-[62px]"
      />
      <div className="relative flex w-screen flex-nowrap gap-6">
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.left)}>
          {cards1}
        </div>
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.left)}>
          {cards1}
        </div>
      </div>
      <div className="relative flex w-screen flex-nowrap gap-6">
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.right)}>
          {cards2}
        </div>
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.right)}>
          {cards2}
        </div>
      </div>
    </div>
  );
}

export default SlideSection;
