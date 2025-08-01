'use client'

import { useForm } from 'react-hook-form'

type SignUpForm = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function BasicReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<SignUpForm>()

  const onSubmit = (data: SignUpForm) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      })
      return
    }

    console.log('회원가입 데이터:', data)
    // 서버로 전송 로직 작성
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-xl font-bold mb-4">회원가입</h2>

      {/* 사용자 이름 */}
      <div>
        <label className="block mb-1">사용자 이름</label>
        <input
          type="text"
          {...register('username', {
            required: '사용자 이름은 필수입니다.',
            minLength: {
              value: 2,
              message: '2자 이상 입력해주세요.',
            },
          })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      {/* 이메일 */}
      <div>
        <label className="block mb-1">이메일</label>
        <input
          type="email"
          {...register('email', {
            required: '이메일은 필수입니다.',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* 비밀번호 */}
      <div>
        <label className="block mb-1">비밀번호</label>
        <input
          type="password"
          {...register('password', {
            required: '비밀번호는 필수입니다.',
            minLength: {
              value: 6,
              message: '6자 이상 입력해주세요.',
            },
          })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* 비밀번호 확인 */}
      <div>
        <label className="block mb-1">비밀번호 확인</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: '비밀번호 확인이 필요합니다.',
          })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        회원가입
      </button>
    </form>
  )
}
