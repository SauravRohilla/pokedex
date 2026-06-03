import type React from 'preact/compat'
import { useState } from 'preact/hooks'
import { handleSignUpInput, saveUser } from '../utlities/helper'
import { useLocation } from 'preact-iso'

export default function SignUpForm() {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const isMatching = password.length > 0 && password === confirmPassword
  const [email, setEmail] = useState<string>('')
  const { route } = useLocation()
  return (
    <>
      <div className="container m-auto px-4 py-10">
        <h1 className={'mb-12 text-center text-[40px] dark:text-white'}>SignUp</h1>
        <form action="" class={'m-auto flex w-5/12 flex-col gap-10'}>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="signup-email">
              Email
            </label>
            <input
              id={'signup-email'}
              autoComplete={'username'}
              className={
                'rounded-1 border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]'
              }
              type="text"
              placeholder={'Enter your email here'}
              onChange={(e) => {
                setEmail(e.currentTarget.value)
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="signup-password">
              Password
            </label>
            <input
              id="signup-password"
              autocomplete="new-password"
              className={`${isMatching && '!border-green-500'} rounded-1 border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]`}
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleSignUpInput(e, setPassword)
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="signup-confirm-password">
              Confirm Password
            </label>
            <input
              autocomplete="new-password"
              id={'signup-confirm-password'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleSignUpInput(e, setConfirmPassword)
              }}
              value={confirmPassword}
              className={`${isMatching && '!border-green-500'} rounded-1 border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]`}
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-around">
            <button
              type={'submit'}
              disabled={!isMatching || email === ''}
              className={
                'cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition-colors'
              }
              onClick={() => {
                const saved: boolean = saveUser(email, password)
                if (!saved) {
                  alert('User alredy exists')
                } else route('/login')
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
