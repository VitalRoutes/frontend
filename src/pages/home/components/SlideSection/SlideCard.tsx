interface Props {
  title: string;
  people: number;
}

function SlideCard({ title, people }: Props) {
  return (
    <div className="h-[325px] w-[500px] shrink-0 rounded-[30px] bg-gray-300">
      <div className="text-7xl">{title}</div>
      <div>{people}명이 참가중</div>
    </div>
  );
}

export default SlideCard;
