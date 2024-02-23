interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function HealthCareCard({ title, desc, imgSrc }: Props) {
  return (
    <div className="relative h-[278px] w-[433px] overflow-hidden rounded-[40px] bg-gray-4 bg-gradient-to-r from-black/15 to-black/0 px-[36px] py-[46px]">
      <img
        className="absolute left-0 top-0 h-full w-full object-cover"
        src={imgSrc}
        alt=""
      />
      <div className="relative z-10 flex w-[238px] flex-col gap-4  text-gray-11">
        <h1 className="line-clamp-2 break-keep text-[24px] font-bold leading-[140%] ">
          {title}
        </h1>
        <p className="line-clamp-3 break-keep  leading-[150%]">{desc}</p>
      </div>
    </div>
  );
}

export default HealthCareCard;
