import Link from "next/link"
import { Lobster_Two } from "next/font/google"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const Lobster = Lobster_Two({
    subsets: ['latin'],
    weight: '700',
})

const Header = () => {
    return (
        <header>
        <nav className="bg-black grid p-7 text-xl grid-cols-3 items-center">
        <p className={Lobster.className}>Lil Jojo</p>
        <div className="flex gap-10 justify-center font-bold">
            <Link className="transition-all duration-300 hover:scale-110" href="/">Accueil</Link>
            <Link className="transition-all duration-300 hover:scale-110" href="/Discographie">Discographie</Link>
            <Link className="transition-all duration-300 hover:scale-110" href="/contact">Contact</Link>
        </div>
        <div className="flex justify-end items-center h-10">
          <DotLottieReact
            src="https://lottie.host/f082b425-5615-4755-bae4-62bfde5a313e/86OoTjX5fv.lottie"
            loop
            autoplay
            className="h-30 w-50 p-3"
          />
        </div>
        </nav>
        </header>
    )
}

export default Header