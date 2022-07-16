import Image from "next/image"

const MobileAbout = () => {
    return(
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mobAboutHead">
                <div className="text-lg font-semibold text-gold">01.</div>
                <div className="text-2xl font-semibold text-white">About Me</div>
            </div>
            <div className="flex flex-col space-y-4 text-white mobAboutContent">
                Hello! My name is Victor and I enjoy creating things that live on the internet. My interest in technology (in general) started back in when I was a kid from cartoons such as <span className="text-gold">jimmy neutron</span> — turns out it is tougher and more interesting than I saw in movies, so I scoured the 

                internet for what I can do in tech and I found web development, I started by learning html and css and it feels like I was born to do this and it all just makes sense to me.

                I fully got into web and android development back in 2019 when I was in my final year in high school, fast foward to today, I have had the priviledge of working for my school and building them their first e-learning platform, cbt system and mobile app.

                My main focus these days is building fast, easily accessible, responsive and high quality products for small, medium and big scale companies and clients. I feel I was born to code so I am very passionate about it.
            </div>
            <div className="bg-[url('/user.jpeg')] p-32 sm:p-64 bg-cover bg-center rounded-lg  grayscale hover:grayscale-0 hover:cursor-pointer mobAboutImage"></div>
            <div className="text-white mobAboutContentList">Here are a few technologies I’ve been working with recently:</div>
          <div className="flex flex-col space-y-4 mt-5 mobAboutImageGrid">
            <div className="bg-[url('/nextjs.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-black hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">Next Js</div>
            </div>
            <div className="bg-[url('/reactjs.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-blue-700 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">React Js</div>
            </div>
            <div className="bg-[url('/html.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-orange-500 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">Html</div>
            </div>
            <div className="bg-[url('/css.webp')] p-20 bg-center bg-contain bg-no-repeat grid group hover:cursor-pointer hover:bg-blue-500 hover:bg-[url('')]">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">React Js</div>
            </div>
            <div className="bg-[url('/js.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-yellow-500 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">Javascript</div>
            </div>
            <div className="bg-[url('/tailwindcss.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-purple-900 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">Tailwindcss</div>
            </div>
            <div className="bg-[url('/sanity.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-red-600 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">Sanity</div>
            </div>
            <div className="bg-[url('/graphql.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-black hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-purple-800 font-semibold text-2xl uppercase">GraphQL</div>
            </div>
            <div className="bg-[url('/solidity.png')] bg-white p-20 bg-center bg-auto bg-no-repeat grid group hover:cursor-pointer hover:bg-white hover:bg-[url('')]">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-black font-semibold text-2xl uppercase">Solidity</div>
            </div>
            <div className="bg-[url('/java.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-red-500 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-white font-semibold text-2xl uppercase">Java</div>
            </div>
            <div className="bg-[url('/nodejs.webp')] p-20 bg-center bg-cover grid group hover:cursor-pointer hover:bg-lime-500 hover:bg-[url('')] bg-no-repeat">
              <div className="place-self-center opacity-0 group-hover:opacity-100 group-hover:text-black font-semibold text-2xl uppercase">Node Js</div>
            </div>
          </div>
        </div>
    )
}

export default MobileAbout