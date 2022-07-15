import Image from "next/image"

const LargeAbout = () => {
    return (
        <div className="flex flex-col space-y-5 md:mx-18 lg:mx-42">
          <div className="flex justify-between space-x-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4 aboutHead">
                <div className="text-xl font-semibold 2xl:text-4xl text-gold">01.</div>
                <div className="text-4xl font-semibold text-white 2xl:text-6xl">About Me</div>
              </div>
              <div className="text-white aboutContent md:max-w-sm lg:max-w-lg xl:text-2xl xl:max-w-xl 2xl:max-w-3xl 2xl:text-4xl">
                Hello! My name is Victor and I enjoy creating things that live on the internet. My interest in technology (in general) started back in when I was a kid from cartoons such as <span className="text-gold">jimmy neutron</span> — turns put it is tougher and more interesting than I saw in movies, so I scoured the 

                internet for what I can do in tech and I found web development, I started by learning html and css and it feels like I was born to do this and it all just makes sense to me.

                I fully got into web and android development back in 2019 when I was in my final year in high school, fast foward to today, I have had the priviledge of working for my school and building them their first e-learning platform, cbt system and mobile app.

                My main focus these days is building fast, easily accessible, responsive and high quality products for small, medium and big scale companies and clients. I feel I was born to code so I am very passionate about it.

                Here are a few technologies I’ve been working with recently:
              </div>
            </div>
            <div className="bg-[url('/user.jpeg')] flex-1 h-62 bg-cover bg-center rounded-lg grayscale hover:grayscale-0 hover:cursor-pointer aboutImage"></div>
          </div>
          <div className="grid grid-flow-col grid-rows-4 gap-4 mt-5">
            <div>
              <Image src="/nextjs.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/reactjs.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/html.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/css.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/js.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/tailwindcss.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/sanity.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/graphql.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/solidity.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/java.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/xml.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/mapbox.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/mysql.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/nodejs.webp" width={200} height={125} />
            </div>
            <div>
              <Image src="/php.webp" width={200} height={125} />
            </div>
          </div>
        </div>
    )
}

export default LargeAbout