import { ReactNode } from 'react';

interface Props {
  contents?: ReactNode;
  buttons?: ReactNode;
}

function Popup({ contents, buttons }: Props) {
  return (
    <div className="w-10/12 min-w-[300px] max-w-[500px] overflow-hidden rounded-[12px] bg-gray-11 ">
      <div className="p-[40px]">{contents}</div>
      <div className="flex">{buttons}</div>
    </div>
  );
}

export default Popup;
