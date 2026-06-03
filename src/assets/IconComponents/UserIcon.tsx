import { useLocation } from 'preact-iso'
import { theme } from '../../utlities/helper'

const UserIcon = () => {
  const { route } = useLocation()
  return (
    <>
      <svg
        class={'cursor-pointer'}
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        viewBox="0 0 20 18"
        onClick={() => route('/login')}
      >
        <circle
          cx={12}
          cy={7}
          r={4}
          stroke={`${theme.value === 'light' ? '#000' : '#fff'}`}
          strokeWidth={2}
        />
        <path
          stroke={`${theme.value === 'light' ? '#000' : '#fff'}`}
          strokeWidth={2}
          d="M16 21H8c-2.21 0-4.16-1.938-3.008-3.824C6.118 15.333 8.297 14 12 14s5.882 1.333 7.008 3.176C20.16 19.062 18.21 21 16 21Z"
        />
      </svg>
    </>
  )
}
export default UserIcon
