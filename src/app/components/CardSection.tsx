const CardSection = () => { 
    return (
        <div className="p-5 md:p-20">
            <h1 className="text-center text-lg font-bold leading-snug sm:text-xl md:text-2xl lg:text-3xl w-full mx-auto">
                Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br />
                <span className="block mt-2 md:ml-8">Developing Billion-Dollar Valued Developers and Solopreneurs</span>
            </h1>

            <p className="p-5 md:p-10 text-justify tracking-tight md:tracking-normal leading-relaxed text-sm md:text-base" id="cardp">
                The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
            </p>

            {/* Cards Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                <div className="p-2">
                    <img 
                        alt="piaic" 
                        loading="lazy"
                        decoding="async"
                        className="w-[400px] h-[300px] object-cover rounded-md shadow-[0px_4px_10px_rgb(128,128,128)]" 
                        src="/images/card1.jpg"
                    />
                </div>
                <div className="p-2">
                    <img 
                        alt="piaic" 
                        loading="lazy"
                        decoding="async"
                        className="w-[400px] h-[300px] object-cover rounded-md shadow-[0px_4px_10px_rgb(128,128,128)]" 
                        src="/images/card2.jpg"
                    />
                </div>
                <div className="p-2">
                    <img 
                        alt="piaic" 
                        loading="lazy"
                        decoding="async"
                        className="w-[400px] h-[300px] object-cover rounded-md shadow-[0px_4px_10px_rgb(128,128,128)]" 
                        src="/images/card3.jpg"
                    />
                </div>
            </div>

            {/* Cards Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 justify-items-center">
                <div className="p-2">
                    <img 
                        alt="piaic" 
                        loading="lazy"
                        decoding="async"
                        className="w-[650px] h-[400px] object-cover rounded-md shadow-[0px_4px_10px_rgb(128,128,128)]" 
                        src="/images/card4.jpg"
                    />
                </div>
                <div className="p-2">
                    <img 
                        alt="piaic" 
                        loading="lazy"
                        decoding="async"
                        className="w-[650px] h-[400px] object-cover rounded-md shadow-[0px_4px_10px_rgb(128,128,128)]" 
                        src="/images/card5.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardSection;
