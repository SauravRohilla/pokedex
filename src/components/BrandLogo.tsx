import logo from "../assets/images/brand-logo.svg"
import darkLogo from "../assets/images/brand-logo-dark.svg"
import { theme } from "../utlities/helper"
export default function BrandLogo() {
    return (
        <>
            <div className="w-1/4">
                <a href="/">
                    <div className="brand-logo">
                        {
                            theme.value === 'light' ?
                                <img class={"object-cover w-full h-full"} src={logo} alt="PokeDox" />
                                :
                                <img class={"object-cover w-full h-full"} src={darkLogo} alt="PokeDox" />
                        }
                    </div>
                </a>
            </div>
        </>
    )
}