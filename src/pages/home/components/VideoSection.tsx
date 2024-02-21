interface Props {
  className?: string;
}

function VideoSection({ className = '' }: Props) {
  const TITLE_CLASS = {
    h1: 'text-[70px] font-bold leading-[120%] text-gray-11 uppercase',
    h2: 'text-[40px] leading-[64px] font-bold text-gray-11 uppercase',
  };
  return (
    <div className={className}>
      <div className="h-[1080px] w-full bg-gray-2" />
      <div className="absolute left-[200px] top-[420px]">
        <h1 className={TITLE_CLASS.h1}>Move,</h1>
        <h1 className={TITLE_CLASS.h1}>Connect,</h1>
        <h1 className={TITLE_CLASS.h1}>Thrive</h1>
        <h2 className={TITLE_CLASS.h2}>With VitalRoutes</h2>
      </div>
    </div>
  );
}

export default VideoSection;
