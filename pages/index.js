import Head from "next/head";
import LargeNav from "../components/largeNav";
import MobileNav from "../components/mobileNav";
import Preloader from "../components/preloader";
import Hero from "../components/hero";
import LargeAbout from "../components/largeAbout";
import MobileAbout from "../components/mobileAbout";

export default function Home() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader")
        preloader.classList.add("-translate-x-full")
    }, 3000);
    var lastScroll = 0
    window.addEventListener('scroll', function () {
      var state = window.pageYOffset || this.document.documentElement.scrollTop
      const navbar = this.document.querySelector(".nav")
      const mobNav = this.document.querySelector(".mobNav")
      const lAbout = this.document.querySelector(".lAbout")
      const mAbout = this.document.querySelector(".mAbout")
      const aboutHead = this.document.querySelector(".aboutHead")
      const aboutContent = this.document.querySelector(".aboutContent")
      const aboutImage = this.document.querySelector(".aboutImage")
      const mobAboutHead = this.document.querySelector(".mobAboutHead")
      const mobAboutContent = this.document.querySelector(".mobAboutContent")
      const mobAboutImage = this.document.querySelector(".mobAboutImage")
      if (state > lastScroll) {
        console.log("down")
        navbar.classList.add("shadow-sm")
        mobNav.classList.add("shadow-sm")
      }
      else if (state == 0) {
        console.log("top")
        navbar.classList.remove("shadow-sm")
        mobNav.classList.remove("shadow-sm")
      }
      else {
        console.log("up")
        navbar.classList.remove("shadow-sm")
        mobNav.classList.remove("shadow-sm")
      }
      if (state >= 50) {
        lAbout.classList.remove("opacity-0")
        mAbout.classList.remove("opacity-0")
        aboutHead.classList.add("animate-fade-up-1")
        aboutContent.classList.add("animate-fade-up-2")
        aboutImage.classList.add("animate-fade-up-3")
        mobAboutHead.classList.add("animate-fade-up-1")
        mobAboutContent.classList.add("animate-fade-up-2")
        mobAboutImage.classList.add("animate-fade-up-3")
      }
      else {
        lAbout.classList.add("opacity-0")
        mAbout.classList.add("opacity-0")
        aboutHead.classList.remove("animate-fade-up-1")
        aboutContent.classList.remove("animate-fade-up-2")
        aboutImage.classList.remove("animate-fade-up-3")
        mobAboutHead.classList.remove("animate-fade-up-1")
        mobAboutContent.classList.remove("animate-fade-up-2")
        mobAboutImage.classList.remove("animate-fade-up-3")
      }
      lastScroll = state <= 0 ? 0 : state;
    }, false)
  }
  return(
    <div className="flex flex-col w-full h-auto bg-zinc-800">
      <Head>
        <title>Victor Omorogbe</title>
        <meta name="description" content="Victor Omorogbe's portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Preloader />
      <div className="hidden sm:block"><LargeNav /></div>
      <div className="sm:hidden"><MobileNav /></div>
      <div className="w-full h-auto px-4 py-5 sm:px-10 mt-20 flex flex-col space-y-10">
        <Hero />
        <div className="hidden md:block opacity-0 lAbout"><LargeAbout /></div>
        <div className="md:hidden opacity-0 mAbout"><MobileAbout /></div>
      </div>
    </div>
  )
}