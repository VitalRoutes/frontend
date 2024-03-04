import { twMerge } from 'tailwind-merge';
import { BASE_IMG_SRC } from '@/constants/src';
import Comment from './Commet';
import SpotSlide from './SpotSlide';
import MoreButton from '@/components/units/MoreButton';

const TMP_DATA = [
  {
    profileImgSrc: '',
    nickname: 'nick',
    content: '내용입니다.',
    images: [
      `${BASE_IMG_SRC}/intro/intro_1.png`,
      `${BASE_IMG_SRC}/intro/intro_2.png`,
      `${BASE_IMG_SRC}/intro/intro_3.png`,
      `${BASE_IMG_SRC}/intro/intro_1.png`,
      `${BASE_IMG_SRC}/intro/intro_2.png`,
    ],
    date: '10',
  },
  {
    profileImgSrc: '',
    nickname: 'nick',
    content: '내용입니다.',
    images: [
      `${BASE_IMG_SRC}/intro/intro_1.png`,
      `${BASE_IMG_SRC}/intro/intro_2.png`,
      `${BASE_IMG_SRC}/intro/intro_3.png`,
      `${BASE_IMG_SRC}/intro/intro_1.png`,
      `${BASE_IMG_SRC}/intro/intro_2.png`,
    ],
    date: '10',
  },
];

interface Props {
  className?: string;
}

function CommentSection({ className }: Props) {
  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center gap-[62px]',
        className,
      )}
    >
      {TMP_DATA.map(({ profileImgSrc, nickname, content, images, date }) => (
        <div key={nickname} className="flex w-full flex-col gap-[42px]">
          <Comment
            profileImgSrc={profileImgSrc}
            nickname={nickname}
            content={content}
            date={date}
          />
          <SpotSlide images={images} />
        </div>
      ))}
      <MoreButton />
    </section>
  );
}

export default CommentSection;
