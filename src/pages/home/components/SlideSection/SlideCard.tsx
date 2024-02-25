interface Props {
  title: string;
  people: number;
}

function SlideCard({ title, people }: Props) {
  return (
    <div className="h-auto w-[268px] shrink-0 rounded-[30px] bg-gray-300 px-[38px] py-[42px] xl:w-[500px]">
      <div className="text-7xl">{title}</div>
      <div>{people}명이 참가중</div>
    </div>
  );
}

export default SlideCard;
