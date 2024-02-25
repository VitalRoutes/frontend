import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

function VideoSection({ className = '' }: Props) {
  const TITLE_CLASS = {
    h1: 'text-[32px] xl:text-[70px] font-bold leading-[120%] text-gray-11 uppercase',
    h2: 'text-[14px] xl:text-[40px] leading-[64px] font-bold text-gray-11 uppercase',
  };
  return (
    <div className={twMerge('h-[520px] w-full xl:h-[1080px]', className)}>
      <div className="h-full w-full bg-gray-2" />
      <div className="absolute left-[21px] top-[175px] xl:left-[200px] xl:top-[420px]">
        <h1 className={TITLE_CLASS.h1}>Move,</h1>
        <h1 className={TITLE_CLASS.h1}>Connect,</h1>
        <h1 className={TITLE_CLASS.h1}>Thrive</h1>
        <h2 className={twMerge(TITLE_CLASS.h2, 'mt-[16px]')}>
          With VitalRoutes
        </h2>
      </div>
    </div>
  );
}

export default VideoSection;
