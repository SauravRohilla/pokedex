import BrandLogo from "./BrandLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearchBar from "./HeaderSearchBar";
import ThemeDecider from "./ThemeDecider";

export default function Header() {
    return (
        <>
            <header className="bg-[#fff] p-4 dark:bg-black backdrop-blur-xl drop-shadow-[0_8px_32px_rgba(0,0,0,40%)]">
                <div className="container m-auto">
                    <div className="flex justify-between items-center">
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