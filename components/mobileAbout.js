const MobileAbout = () => {
    return(
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mobAboutHead">
                <div className="text-lg font-semibold text-gold">01.</div>
                <div className="text-2xl font-semibold text-white">About Me</div>
            </div>
            <div className="flex flex-col space-y-4 text-white mobAboutContent">
                Hello! My name is Victor and I enjoy creating things that live on the internet. My interest in technology (in general) started back in when I was a kid from cartoons such as <span className="text-gold">jimmy neutron</span> — turns put it is tougher and more interesting than I saw in movies, so I scoured the 

                internet for what I can do in tech and I found web development, I started by learning html and css and it feels like I was born to do this because somehow it all just made perfect sense to me.

                I fully got into web and android development back in 2019 when I was in my final year in high school, fast foward to today, I have had the priviledge of working for my school and building them their first e-learning platform, cbt system and mobile app.

                My main focus these days is building fast, easily accessible, responsive and high quality products for small, medium and big scale companies and clients. I feel I was born to code so I am very passionate about it.
            </div>
            <div className="bg-[url('/user.jpeg')] p-32 sm:p-64 bg-cover bg-center rounded-lg  grayscale hover:grayscale-0 hover:cursor-pointer mobAboutImage"></div>
        </div>
    )
}

export default MobileAbout