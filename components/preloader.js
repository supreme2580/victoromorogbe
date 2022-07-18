import Image from "next/image"

const Preloader = () => {
    return(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center transition duration-200 ease-in-out transform bg-zinc-900 preloader">
            <div className="flex flex-col items-center justify-center">
                <Image src="/preloaderBg.png" alt="logo" height={100} width={100} className="w-auto h-auto animate-spin" />
                <div className="absolute text-6xl font-semibold text-gold animate-pulse">V</div>
            </div>
        </div>
    )
}
export default Preloader