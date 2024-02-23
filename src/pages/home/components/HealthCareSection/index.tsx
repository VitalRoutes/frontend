import { twMerge } from 'tailwind-merge';
import SectionTitle from '../common/SectionTitle';
import HealthCareCard from './HealthCareCard';
import { BASE_IMG_SCR } from '@/constants/src';

const MOCK_DATA = [
  {
    imgSrc: `${BASE_IMG_SCR}/registration/registration_1.png`,
    title: '마음의 안정을 찾는 법: 스트레스 관리의 최신 전략',
    desc: '스트레스 관리의 핵심은 마음챙김과 자기 인식을 통한 일상의 압박감 감소입니다. 규칙적인 명상, 딥브리딩 기법, 그리고 긍정적인 사고 방식을 키우는 것이 중요합니다.',
  },
  {
    imgSrc: `${BASE_IMG_SCR}/registration/registration_1.png`,
    title: '마음의 안정을 찾는 법: 스트레스 관리의 최신 전략',
    desc: '스트레스 관리의 핵심은 마음챙김과 자기 인식을 통한 일상의 압박감 감소입니다. 규칙적인 명상, 딥브리딩 기법, 그리고 긍정적인 사고 방식을 키우는 것이 중요합니다.',
  },
  {
    imgSrc: `${BASE_IMG_SCR}/registration/registration_1.png`,
    title: '마음의 안정을 찾는 법: 스트레스 관리의 최신 전략',
    desc: '스트레스 관리의 핵심은 마음챙김과 자기 인식을 통한 일상의 압박감 감소입니다. 규칙적인 명상, 딥브리딩 기법, 그리고 긍정적인 사고 방식을 키우는 것이 중요합니다.',
  },
  {
    imgSrc: `${BASE_IMG_SCR}/registration/registration_1.png`,
    title: '마음의 안정을 찾는 법: 스트레스 관리의 최신 전략',
    desc: '스트레스 관리의 핵심은 마음챙김과 자기 인식을 통한 일상의 압박감 감소입니다. 규칙적인 명상, 딥브리딩 기법, 그리고 긍정적인 사고 방식을 키우는 것이 중요합니다.',
  },
];

interface Props {
  className?: string;
}

function HealthCareSection({ className = '' }: Props) {
  return (
    <section
      className={twMerge('flex flex-col items-center gap-[62px]', className)}
    >
      <SectionTitle
        subTitle="wellness"
        title="건강 관리에 관심이 많으신가요?"
        href="/"
      />
      <div className="grid w-fit grid-cols-2 gap-4">
        {MOCK_DATA.map(({ imgSrc, title, desc }) => (
          <HealthCareCard
            key={title}
            imgSrc={imgSrc}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
}

export default HealthCareSection;
