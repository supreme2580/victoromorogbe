const Experience = () => {
    return(
        <div className="flex flex-col">
            <div className="flex items-center space-x-4 aboutHead">
                <div className="text-xl font-semibold 2xl:text-4xl text-gold">02.</div>
                <div className="text-4xl font-semibold text-white 2xl:text-6xl">Where I've Worked</div>
            </div>
            <div className="flex w-full space-x-10 mt-10">
                <div className="flex flex-col space-y-2">
                    <div className="text-zinc-200 text-lg py-3 px-5 hover:bg-zinc-400">Bankless Africa</div>
                    <div>Spade</div>
                </div>
                <div className="bg-gold w-0.5 h-auto"></div>
                <div>
                    <div>Date</div>
                    <div>Developer</div>
                    <div>Description</div>
                    <div>Status</div>
                </div>
            </div>
        </div>
    )
}

export default Experience