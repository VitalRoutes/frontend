import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  title: string;
  subTitle: string;
  imgSrc: string;
}

function Banner({ className = '', title, subTitle, imgSrc }: Props) {
  const TITLE_CLASS = {
    h1: 'text-[32px] xl:text-[70px] font-bold leading-[120%] text-gray-11 uppercase whitespace-pre-wrap',
    h2: 'text-[14px] xl:text-[40px] leading-[64px] font-bold text-gray-11 uppercase',
  };
  return (
    <div
      className={twMerge(
        'relative h-[520px] w-full bg-gradient-to-r from-black/[0.12] to-black/0 xl:h-[1080px] ',
        className,
      )}
    >
      <img
        className="relative -z-10 h-full w-full object-cover"
        src={imgSrc}
        alt="banner"
      />
      <div className="absolute left-[21px] top-[175px] xl:left-[200px] xl:top-[420px]">
        <h1 className={TITLE_CLASS.h1}>{title}</h1>
        <h2 className={twMerge(TITLE_CLASS.h2, 'mt-[16px]')}>{subTitle} </h2>
      </div>
    </div>
  );
}

export default Banner;
