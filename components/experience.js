import Link from "next/link"

const Experience = () => {

    return(
        <div className="flex flex-col mt-10">
            <div className="flex items-center space-x-4 aboutHead">
                <div className="text-lg sm:text-xl font-semibold 2xl:text-4xl text-gold">02.</div>
                <div className="text-2xl sm:text-4xl font-semibold text-white 2xl:text-6xl">Where I&apos;ve Worked</div>
            </div>
            <div className="flex flex-wrap justify-between space-y-5 mt-5">
                <div className="flex items-center space-x-4 max-w-lg">
                    <div className="flex items-center border-gold border-2 px-2.5 py-0.5 sm:px-5 sm:py-3 rounded-full">
                        <div className="text-base font-semibold 2xl:text-2xl text-gold">i.</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="text-xl font-semibold text-white sm:text-3xl">
                            <span className="text-gold">Developer @ </span>Bankless Africa
                        </div>
                        <div className="text-white font-base text-base sm:text-lg">Going Bankless is about freedom. Freedom to build wealth. It&apos;s about accessing the new monetary system that is open to everyone regardless of your colour, location, gender etc.</div>
                        <div className="text-gold font-base text-base">
                        {
                            //if ongoing hide visit me
                        }
                            <Link href="https://banklessafrica.com">
                                <a target="blank">Visit bankless africa here</a>
                            </Link>
                        </div>
                        <div className="text-green-500">Completed</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 max-w-lg">
                    <div className="flex items-center border-gold border-2 px-2.5 py-0.5 sm:px-5 sm:py-3.5 rounded-full">
                        <div className="text-base font-semibold 2xl:text-2xl text-gold">ii.</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="text-xl font-semibold text-white sm:text-3xl">
                            <span className="text-gold">Developer @ </span>Bankless Africa
                        </div>
                        <div className="text-white font-base text-base sm:text-lg">Going Bankless is about freedom. Freedom to build wealth. It&apos;s about accessing the new monetary system that is open to everyone regardless of your colour, location, gender etc.</div>
                        <div className="text-gold font-base text-base">
                        {
                            //if ongoing hide visit me
                        }
                            <Link href="https://banklessafrica.com">
                                <a target="blank">Visit bankless africa here</a>
                            </Link>
                        </div>
                        <div className="text-green-500">Completed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience