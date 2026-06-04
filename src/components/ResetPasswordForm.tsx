import { useState } from 'preact/hooks'
import { handleSignUpInput, resetPassword } from '../utlities/helper'
import { useLocation } from 'preact-iso'

export default function ResetPasswordForm() {
  const [email, setEmail] = useState<string>('')
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const { route } = useLocation()
  return (
    <>
      <div className="container m-auto px-4 py-10">
        <h1 className={'mb-12 text-center text-[40px] dark:text-white'}>Reset Password</h1>
        <form action="" class={'m-auto flex w-5/12 flex-col gap-10'}>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="signup-email">
              Email
            </label>
            <input
              id={'reset-email'}
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
              Old Password
            </label>
            <input
              id="reset-old-password"
              autocomplete="new-password"
              className={`rounded-1 border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]`}
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleSignUpInput(e, setOldPassword)
              }}
              required
              value={oldPassword}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px] dark:text-[#BC0100]'} htmlFor="signup-confirm-password">
              New Password
            </label>
            <input
              autocomplete="new-password"
              id={'reset-new-password'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleSignUpInput(e, setNewPassword)
              }}
              value={newPassword}
              className={`rounded-1 border border-[#c4c4c4] px-2 py-1 outline-0 dark:text-[#c4c4c4]`}
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-around">
            <button
              type={'submit'}
              disabled={oldPassword === '' || newPassword === '' || email === ''}
              className={
                'cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition-colors'
              }
              onClick={() => {
                const response = resetPassword(email, oldPassword, newPassword)
                alert(response)
                if (response == 'Password changed successfully') {
                  route('/login')
                }
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
