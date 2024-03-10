import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { BASE_IMG_SCR } from '@/constants/src';


interface FormValues {
  name: string;
  nickname: string;
  email: string;
  password: string;
  username: string;
  agree: boolean;
}


function SignUp() {
  const methods = useForm<FormValues>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = methods;

  const onSubmit = (data: FormValues) => {
    console.log('data', data)
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/3 h-screen xl:flex hidden">
          <img src={`${BASE_IMG_SCR}/login/login_img.jpg`} alt='login_img' className="w-full h-full object-cover" />
        </div>
        <form className="xl:w-[580px] sm:w-[580px] w-3/4 mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)} >
          <span className="text-xl font-bold text-gray-1 leading-8">Vitalroutes에 가입하세요.</span>
          <Input
            label="이름"
            type="name"
            id="signUp_name"
            placeholder="김루트"
            className="h-[58px]"
            {...register("name", {
              required: "※ 이름을 입력해 주세요.",
              minLength: { value: 3, message: "※ 이름은 최소 3글자 이상이어야 합니다." },
              maxLength: { value: 16, message: "※ 이름은 최대 16글자까지만 허용됩니다." }
            })}
            errorMessage={errors.name?.message}
          />

          <div className="relative">
            <Input
              label="닉네임"
              type="nickname"
              id="signUp_nickname"
              placeholder="닉네임을 입력해 주세요."
              className="h-[58px]"
              {...register("nickname", {
                required: "※ 닉네임을 입력해주세요.",
                minLength: { value: 3, message: "※ 닉네임은 최소 3글자 이상이어야 합니다." },
                maxLength: { value: 16, message: "※ 닉네임은 최대 16글자까지만 허용됩니다." }
              })}
              errorMessage={errors.nickname?.message}
            />
            <Button
              variant="tag-b"
              type="submit"
              className=" px-4 py-2 absolute top-11 right-4 text-[13px] text-gray-2 tracking-tighter mt-2">
              중복 인증
            </Button>
          </div>

          <Input
            label="이메일"
            type="email"
            id="signUp_email"
            placeholder="example@vitalroutes.com"
            className="h-[58px]"
            {...register("email", {
              required: "※ 이메일 입력란이 비어있습니다.",
              pattern: {
                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "※ 올바른 이메일 형식에 맞게 작성해주세요."
              }
            })}
            errorMessage={errors.email?.message}
          />

          <div className="relative">
            <Input
              label="비밀번호"
              type="password"
              id="signUp_password"
              placeholder="비밀번호 8~16자리를 입력해주세요"
              className="h-[58px]"
              {...register("password", {
                required: "※ 비밀번호 입력란이 비어있습니다.",
                pattern: {
                  value: /^(?=(?:.*[a-z])(?:.*[A-Z])|(?:(?=.*\d)(?=.*[a-z]))|(?:(?=.*\d)(?=.*[A-Z])))[a-zA-Z\d]{8,16}$/,
                  message: "※ 올바른 비밀번호 형식에 맞게 작성해주세요."
                }
              })}
              errorMessage={errors.password?.message}
            />
          </div>
          <span className='text-[13px] text-gray-2 tracking-tight'>
            비밀번호는 8~16자리이며, 대문자, 소문자, 숫자 중 최소 2종류를 포함해야 합니다.
          </span>


          <div className="relative">
            <Input
              type="checkbox"
              id="signUp_checkbox"
              className="w-4 h-4 m-0"
              {...register("agree", {
                required: "※ 약관에 동의하셔야 회원가입이 가능합니다."
              })
              }
              errorMessage={errors.agree?.message}
            />

            <p className="text-[15px] tracking-tight absolute text-right top-3 left-6">Vitalroutes의 <Link to="" className="underline">서비스 약관</Link>
              , <Link to="" className="underline">개인정보 보호정책</Link>
              &nbsp;및 <Link to="" className="underline">위치기반 서비스</Link>에 동의합니다.</p>
          </div>

          <Button variant="secondary-a" type="submit" disabled={isSubmitting}>
            계정 만들기
          </Button>
        </form>

      </div>
      <DevTool control={methods.control} />
    </div>

  )
}

export default SignUp;