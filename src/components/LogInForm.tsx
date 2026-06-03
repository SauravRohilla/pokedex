import { useState } from 'preact/hooks'
import { handleSignUpInput, logIn } from '../utlities/helper'
import { useLocation } from 'preact-iso'

export default function LogInForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { route } = useLocation()
  return (
    <>
      <div className="container m-auto px-4 py-10">
        <h1 className={'mb-12 text-center text-[40px] dark:text-white'}>LogIn</h1>
        <form action="" class={'m-auto flex w-5/12 flex-col gap-10'}>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              className={
                'rounded-[4px] border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]'
              }
              type="text"
              onChange={(e) => handleSignUpInput(e, setEmail)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              className={
                'rounded-[4px] border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]'
              }
              type="password"
              onChange={(e) => handleSignUpInput(e, setPassword)}
              value={password}
            />
          </div>
          <div className="flex items-center justify-around">
            <a
              href={'/signup'}
              className={
                'cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300'
              }
            >
              Sign Up
            </a>
            <button
              type={'submit'}
              className={
                'cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
              }
              onClick={() => {
                const isLogggedIn = logIn(email, password)
                isLogggedIn && route('/')
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
