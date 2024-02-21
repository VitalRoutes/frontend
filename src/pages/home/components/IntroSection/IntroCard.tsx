interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function IntroCard({ imgSrc, title, desc }: Props) {
  return (
    <div className="flex w-[480px] flex-col items-center gap-[80px]">
      <img src={imgSrc} alt="intro card" />
      <div>
        <h1 className="mb-4 text-center text-[32px] font-bold leading-[150%]">
          {title}
        </h1>
        <p className="break-keep px-12 text-center text-[20px] leading-[160%]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default IntroCard;
