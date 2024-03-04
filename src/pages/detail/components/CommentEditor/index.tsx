import { FormProvider, useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import SpotFileInput from './SpotFileInput';
import { CommentForm, SpotKey } from '@/types/posts';

function CommentEditor() {
  const methods = useForm<CommentForm>();
  const SPOTS: Array<SpotKey> = ['spot1', 'spot2', 'spot3', 'spot4', 'spot5'];

  return (
    <div className="flex w-full flex-col gap-[56px]">
      <Input
        {...methods.register('comment')}
        placeholder="Add a comment"
        autoComplete="off"
        button={<Button variant="third-b">Post</Button>}
      />
      <FormProvider {...methods}>
        <div className="flex justify-between">
          {SPOTS.map((spotIdx) => {
            const previewFile = methods.watch(spotIdx)?.item(0);
            const previewImgSrc = previewFile
              ? URL.createObjectURL(previewFile)
              : undefined;
            return (
              <SpotFileInput spotIdx={spotIdx} previewImgSrc={previewImgSrc} />
            );
          })}
        </div>
      </FormProvider>
    </div>
  );
}

export default CommentEditor;
