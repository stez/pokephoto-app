import Image from "next/image"
import Link from "next/link"

export default function AppBar() {
  return (
    <nav className=" bg-pokemon-dark px-2 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href={"/"}>
            <div className="flex items-center hover:cursor-pointer">
                <Image src="/pokemon-logo.png" height={40} width={120} className="h-6" alt="Pokemon Logo" />
                <span className="ml-4 self-center text-2xl font-extrabold whitespace-nowrap text-white"> PhotoApp</span>
            </div>
            </Link>
            <div className="flex md:order-2">
                <button type="button" className=" text-pokemon-dark  bg-pokemon-secondary hover:bg-pokemon-secondarydark hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Login</button>
            </div>
        </div>
    </nav>
  )
}
