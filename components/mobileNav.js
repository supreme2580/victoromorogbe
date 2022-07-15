import Image from "next/image"
import Link from "next/link"

export default function MobileNav() {
    const mobNav = () => {
        const sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle("-translate-x-full")
    }
    return(
        <div className="flex">
            <div className="fixed top-0 z-50 flex items-center justify-between w-full h-16 px-4 text-4xl font-semibold bg-transparent shadow-zinc-900 backdrop-blur-sm mobNav">
                <div>
                    <Image src="/logo.png" width={40} height={40} />
                </div>
                <div>
                    <button className="p-2" onClick={mobNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="fixed inset-y-0 left-0 z-50 w-64 min-h-full p-4 transition duration-200 ease-in-out transform -translate-x-full bg-zinc-900 sidebar">
                <div className="flex flex-col space-y-4">
                    <div>
                        <div className="flex items-center justify-center">
                            <Image src="/user.jpeg" height={100} width={100} className="rounded-full" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="text-xl font-semibold text-white">Victor <span className="text-gold">Omorogbe</span></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="text-lg font-semibold text-white"><span className="text-gold">+234 </span> 807 088 9521</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="p-3 font-semibold border-2 rounded-lg outline-none border-gold border-r-white border-b-white text-gold">View
                            <span className="text-white"> Resume</span>
                        </button>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <Link href="#mAbout">
                            <a>
                                <button className="flex items-center p-4 space-x-2">
                                    <div className="text-base text-gold">01.</div>
                                    <div className="text-lg text-white">About</div>
                                </button>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <button className="flex items-center p-4 space-x-2">
                                    <div className="text-base text-gold">02.</div>
                                    <div className="text-lg text-white">Experience</div>
                                </button>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <button className="flex items-center p-4 space-x-2">
                                    <div className="text-base text-gold">03.</div>
                                    <div className="text-lg text-white">Work</div>
                                </button>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <button className="flex items-center p-4 space-x-2">
                                    <div className="text-base text-gold">04.</div>
                                    <div className="text-lg text-white">Contact</div>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}