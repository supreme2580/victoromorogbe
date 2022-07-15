import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return(
        <div className="flex lg:space-x-20 justify-between">
          <div className="hidden lg:flex flex-col space-y-10 2xl:space-y-12">
            <div className="animate-fade-up-1">
              <Link href="/">
                <a>
                  <div className="bg-[url('/fb.png')] hover:bg-[url('/fbG.png')] object-cover bg-cover p-8"></div>
                </a>
              </Link>
            </div>
            <div className="animate-fade-up-2">
              <Link href="/">
                <a>
                  <div className="bg-[url('/whats.png')] hover:bg-[url('/whatsG.png')] object-cover bg-cover p-8"></div>
                </a>
              </Link>
            </div>
            <div className="animate-fade-up-3">
              <Link href="/">
                <a>
                  <div className="bg-[url('/github.png')] hover:bg-[url('/githubG.png')] object-cover bg-cover p-8"></div>
                </a>
              </Link>
            </div>
            <div className="animate-fade-up-4">
              <Link href="/">
                <a>
                  <div className="bg-[url('/linkedin.png')] hover:bg-[url('/linkedinG.png')] object-cover bg-cover p-8"></div>
                </a>
              </Link>
            </div>
            <div className="animate-fade-up-5">
              <Link href="mailto:webmaster@example.com">
                <a>
                  <div className="bg-[url('/mail.png')] hover:bg-[url('/mailG.png')] object-cover bg-cover p-8"></div>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3 flex-1">
            <div className="text-gold text-lg sm:text-2xl 2xl:text-4xl font-semibold animate-fade-up-1">Hi, my name is</div>
            <div className="text-white text-3xl sm:text-6xl 2xl:text-8xl font-bold animate-fade-up-2">Victor Omorogbe.</div>
            <div className="text-zinc-300 text-3xl sm:text-6xl 2xl:text-8xl font-bold animate-fade-up-3">I build things for the web.</div>
            <div className="text-zinc-400 text-base sm:text-lg 2xl:text-4xl max-w-xl 2xl:max-w-6xl xl:text-2xl animate-fade-up-4">
              I’m a software developer specializing in web development and <span className="text-gold">occassionally android development. </span>
              Currently, I’m focused on building fast and responsive web2 <span className="text-gold">and recently web3</span> platforms that make 
              the world a better place.
            </div>
            <div className="flex items-center space-x-2.5 animate-fade-up-5">
              <div className="2xl:text-2xl xl:text-lg">
                <button className="p-3 2xl:p-6 font-semibold border-2 xl:border-4 rounded-lg outline-none border-gold border-r-white border-b-white text-gold">View
                  <span className="text-white"> Resume</span>
                </button>
              </div>
              <div className="text-2xl 2xl:text-4xl text-white hidden sm:block"><span className="text-gold">+234 </span> 807 088 9521</div>
            </div> 
          </div>
        </div>
    )
}

export default Hero