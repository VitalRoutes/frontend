import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import Input from '@/components/common/Input';

interface FormValues {
  username: string;
  name: string;
  email: string;
}

function FindPw() {
  const methods = useForm<FormValues>();
  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: FormValues) => {
    console.log('data', data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor='username'>Username</label>
        <input
          type="text"
          id='username'
          className="bg-yellow border-solid border-gray-600"
          {...register('username',
            {
              required: "Username is required",
            })}
        />
        <p>{errors.username?.message}</p>

        <Input
          label='이메일'
          type='email'
          id='email'
          placeholder='email@gmail.com'
          {...register("email", {
            required: "빈칸이면 안됨",
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "패턴에 맞게 입력"
            }
          })}
          errorMessage={errors.email?.message}
        />

        <button type='submit'>제출하기</button>
      </form>
      <DevTool control={methods.control} />
    </>
  )
}

export default FindPw;