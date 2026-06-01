import BrandLogo from './BrandLogo'
import HeaderNav from './HeaderNav'
import HeaderSearchBar from './HeaderSearchBar'
import ThemeDecider from './ThemeDecider'

export default function Header() {
  return (
    <>
      <header className="relative z-9999 bg-[#fff] p-4 drop-shadow-[0_8px_32px_rgba(0,0,0,40%)] backdrop-blur-xl dark:bg-black">
        <div className="container m-auto">
          <div className="flex items-center justify-between">
            <BrandLogo />
            <HeaderNav />
            <HeaderSearchBar />
            <ThemeDecider />
          </div>
        </div>
      </header>
    </>
  )
}
