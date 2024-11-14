const HeroSection = () => {
    return (
        <main className="relative z-0 w-full overflow-hidden">

            {/* Background image with opacity using a pseudo-element */}
            <div className="absolute inset-0 -z-10 bg-[url('/images/gh.jpg')] bg-cover bg-center opacity-15"></div>

            <div className="z-50 m-auto mt-6 w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
                {/* Text Section */}
                <div className="h-fit w-full pt-5 md:w-1/2 md:py-10">
                    <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl md:text-left lg:text-6xl">
                        Governor Sindh
                    </h1>
                    <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-main sm:text-4xl md:text-left lg:text-[2.5rem]">
                        Kamran Khan Tessori
                    </h1>
                    <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl md:text-left lg:text-[2.5rem]" id="certified">
                        Certified Cloud<br />Applied Generative AI<br />Engineer (GenEng)
                    </h1>
                    <p className="my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">
                        Earn up to $5,000 / month
                    </p>
                    <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">
                        Now admissions are open in Hyderabad
                    </p>
                    
                    {/* Apply Button and Stats */}
                    <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
                        <a className="w-full md:w-auto" href="/apply">
                            <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                                APPLY NOW
                            </button>
                        </a>
                        <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                            <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                                <div className="w-40 font-extrabold" id="number">562,143</div>
                            </div>
                            <div className="text-center text-xs tracking-wider text-main sm:text-sm" id="number">
                                Accepted Applications
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative mt-7 flex w-full items-center justify-center md:justify-end">
                    <img 
                        alt="piaic" 
                        loading="lazy"
                        width={"1600"}
                        height={"1212"}
                        decoding="async"
                        className="h-auto w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
                        src="/images/cover1.png"
                    />
                </div>
            </div>
        </main>
    )
}

export default HeroSection;
