import MoonIcon from "../assets/images/Moon.svg"
import SunIcon from "../assets/images/Sun.svg"
import { setTheTheme } from "../utlities/helper"
import { theme } from "../utlities/helper"
export default function ThemeDecider() {
    return (
        <>
            <div className="w-1/12">
                <div className="flex items-center justify-center">
                    {
                        theme.value === 'light' ?
                            <img src={MoonIcon} alt="Dark Mode" onClick={() => setTheTheme("dark")} class={"cursor-pointer"} />
                            :
                            <img src={SunIcon} alt="Light Mode" onClick={() => setTheTheme("light")} class={"cursor-pointer"} />
                    }
                </div>
            </div>
        </>
    )
}