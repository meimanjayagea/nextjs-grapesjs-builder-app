import Image from "next/image"
import Link from "next/link"
import logo from "@/public/coartdev.png"

export default function Headers() {
    return (
        <header className="bg-gray-900 px-10 text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
                <Link href={"/home"} className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center mb-4 md:mb-0">
                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" id="ijvx66" className="w-10 h-10 text-white p-2 bg-green-400 rounded-full">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <Image src={logo} alt="" className="rounded-full w-10 h-10 hover:text-green-400" />
                    <span className="ml-3 text-xl text-white hover:text-green-400">COARTDEV</span>
                </Link>
                <nav className="flex lg:w-2/5 flex-wrap items-center lg:justify-end md:ml-auto">
                    <Link href={"/home"} className="mr-5 hover:text-green-400">Home</Link>
                    <Link href={"/chat-gpt"} className="mr-5 hover:text-green-400">Chat AI</Link>
                    <Link href={"/web-builder"} className="mr-5 hover:text-green-400">Web Builder</Link>
                    <Link href={"/article"} className="mr-5 hover:text-green-400">Article</Link>
                    <Link href={"/article"} className="mr-5 hover:text-green-400">Documents</Link>
                    <Link href={'/login'} className="inline-flex items-center bg-green-400 border-0 py-2 px-3 focus:outline-none hover:bg-gray-900 hover:text-green-400 rounded text-base mt-4 md:mt-0">Dashboard</Link>
                </nav>
            </div>
        </header>
    )

}