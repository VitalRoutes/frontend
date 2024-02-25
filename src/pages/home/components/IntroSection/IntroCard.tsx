interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function IntroCard({ imgSrc, title, desc }: Props) {
  return (
    <div className="flex w-[318px] flex-col items-center gap-[24px] sm:w-[480px] sm:gap-[80px]">
      <img className="w-[318px] sm:w-auto" src={imgSrc} alt="intro card" />
      <div>
        <h1 className="mb-2 text-center text-base font-bold leading-[150%] sm:mb-4 sm:text-[32px]">
          {title}
        </h1>
        <p className="break-keep px-12 text-center text-sm leading-[160%] sm:text-[20px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default IntroCard;
