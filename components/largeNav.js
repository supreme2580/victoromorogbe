import Image from "next/image";
import Link from "next/link";

export default function LargeNav() {
    return(
        <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 px-10 space-x-4 text-4xl font-semibold bg-transparent shadow-zinc-900 backdrop-blur-md nav">
            <div>
                <Image src="/logo.png" width={60} height={60} />
            </div>
            <div className="flex space-x-10 md:space-x-20">
                <div className="animate-fade-down-1">
                    <Link href="#lAbout">
                        <a className="group">
                            <div className="flex items-center space-x-2">
                                <div className="text-base text-gold 2xl:text-2xl">01.</div>
                                <div className="text-lg 2xl:text-3xl text-zinc-300 group-hover:text-white">About</div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="animate-fade-down-2">
                    <Link href="/">
                        <a className="group">
                            <div className="flex items-center space-x-2">
                                <div className="text-base text-gold 2xl:text-2xl">02.</div>
                                <div className="text-lg 2xl:text-3xl text-zinc-300 group-hover:text-white">Experience</div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="animate-fade-down-3">
                    <Link href="/">
                        <a className="group">
                            <div className="flex items-center space-x-2">
                                <div className="text-base text-gold 2xl:text-2xl">03.</div>
                                <div className="text-lg 2xl:text-3xl text-zinc-300 group-hover:text-white">Work</div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="animate-fade-down-4">
                    <Link href="/">
                        <a className="group">
                            <div className="flex items-center space-x-2">
                                <div className="text-base text-gold 2xl:text-2xl">04.</div>
                                <div className="text-lg 2xl:text-3xl text-zinc-300 group-hover:text-white">Contact</div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
      </div>
    )
}