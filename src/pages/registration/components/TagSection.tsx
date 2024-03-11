import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { BUTTONS_CLASSES } from '@/components/common/Button';
import { ChallengeRegisterationForm } from '@/types/posts';

function TagSection() {
  const ACTIVE_COLOR = 'bg-green-1';
  const TAGS = ['평화로운', '활기찬'];
  const { register, watch } = useFormContext<ChallengeRegisterationForm>();

  return (
    <div>
      <div className="leadin-[150%] mb-[32px] font-bold">
        방문하신 곳의 분위기와 경험은 어떠셨나요? (다중선택 가능)
      </div>
      <div className="flex gap-0">
        <div className="flex gap-1">
          {TAGS.map((tag, idx) => {
            const watchedTag = watch('tag');

            const isActive = watchedTag && watchedTag[idx];

            return (
              <label
                key={tag}
                htmlFor={tag}
                className={twMerge(
                  BUTTONS_CLASSES['tag-a'],
                  'cursor-pointer',
                  isActive && ACTIVE_COLOR,
                )}
              >
                {tag}
                <input
                  id={tag}
                  {...register(`tag.${idx}`)}
                  type="checkbox"
                  hidden
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TagSection;
