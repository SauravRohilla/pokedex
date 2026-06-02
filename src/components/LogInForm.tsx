export default function LogInForm() {
  return (
    <>
      <div className="container m-auto px-4 py-10">
        <h1 className={'mb-12 text-center text-[40px]'}>LogIn</h1>
        <form action="" class={'m-auto flex w-5/12 flex-col gap-10'}>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px]'} htmlFor="">
              Email
            </label>
            <input
              className={'rounded-[4px] border border-[#c4c4c4] px-2 py-1 outline-0'}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={'text-[14px]'} htmlFor="">
              Password
            </label>
            <input
              className={'rounded-[4px] border border-[#c4c4c4] px-2 py-1 outline-0'}
              type="password"
            />
          </div>
          <div className="flex items-center justify-around">
            <button
              type={'submit'}
              className={
                'cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300'
              }
            >
              Sign Up
            </button>
            <button
              type={'submit'}
              className={
                'cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
              }
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
