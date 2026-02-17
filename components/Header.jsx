import Link from "next/link"

const Header = () => {
    return (
        <nav className="bg-gray-600 flex gap-10 p-10">
            <Link href="/Acceuil">Acceuil</Link>
            <Link href="/Discographie">Discographie</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}

export default Header