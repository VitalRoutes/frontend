import { twMerge } from 'tailwind-merge';
import SlideCard from './SlideCard';
import SectionTitle from '../common/SectionTitle';

interface Props {
  className?: string;
}

function SlideSection({ className }: Props) {
  const cards = [1, 2, 3, 4, 5, 6].map((index) => (
    <SlideCard title={`${index}`} people={index} />
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
        className="mb-[130px]"
      />
      <div className="relative flex w-screen flex-nowrap gap-6">
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.left)}>{cards}</div>
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.left)}>{cards}</div>
      </div>
      <div className="relative flex w-screen flex-nowrap gap-6">
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.right)}>
          {cards}
        </div>
        <div className={twMerge('flex gap-6', ANIMATE_CLASS.right)}>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default SlideSection;
