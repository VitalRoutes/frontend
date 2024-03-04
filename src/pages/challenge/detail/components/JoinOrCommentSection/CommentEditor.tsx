import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

function CommentEditor() {
  return (
    <div>
      <Input
        placeholder="Add a comment"
        autoComplete="off"
        button={<Button variant="third-b">Post</Button>}
      />
    </div>
  );
}

export default CommentEditor;
