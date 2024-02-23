interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function Card({ imgSrc, title, desc }: Props) {
  return (
    <div className="flex flex-col items-center  gap-[62px] ">
      <img src={imgSrc} alt="registration_img" />
      <div className="h-[24px] w-[24px] rounded-full bg-gray-5" />
      <div className="flex flex-col gap-[21px]">
        <h1 className="text-center text-[26px] font-bold leading-[140%]">
          {title}
        </h1>
        <div className="text-center text-[18px] font-medium text-gray-2">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Card;
