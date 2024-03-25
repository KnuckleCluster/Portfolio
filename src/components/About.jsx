import Title from "./Title";

function About() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full md:w-[70vw] h-full">
                <div className="flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-[30px] font-bold text-green-400">Welcome to my portfolio!</h1>
                    <br />
                    <div className="flex justify-center items-center pb-[25px]">
                        <img className="w-[250px] h-[250px] rounded-full overflow-hidden" src="img/me.png" alt="photo" />
                    </div>
                    <div className="pb-[35px]">
                        <h3 className="text-bold text-[45px] underline ">Eugene Kyle Anarna</h3>
                    </div>
                    <Title />

                    <div className="w-[80%] text-[12px] flex flex-col gap-5 text-left py-[45px] pl-[30px] pr-[30px]">

                        <p>
                            Hey there! I'm Eugene Kyle Anarna, a software engineer passionate about crafting digital experiences.
                        </p>
                        <p>
                            I specialize in the MERN Stack and love working with JavaScript, Python, and TailwindCSS. I'm also comfortable diving into mySQL databases.
                        </p>
                        <p>
                            Beyond coding, I've explored System Administration and Network Management, rounding out my skill set for a holistic understanding of tech infrastructure.
                        </p>
                        <p>
                        I thrive on challenges, constantly learning and adapting. Whether it's mastering a new framework or troubleshooting complex systems, I'm up for it.
                        </p>
                        <p>
                            Driven by curiosity, I'm always on the lookout for the next big thing in tech. When I'm not coding, I enjoy exploring the latest advancements or tinkering with side projects.
                        </p>
                        <p className="text-center text-[20px] text-bold text-green-400">Let's connect and build something awesome together!</p>
                    </div>
                    <br />
                    {/* <a className="border bg-transparent text-white p-[10px] rounded-[10px] hover:text-green-400  hover:bg-blue-950 hover:border-green-600" href="#">Lets begin the tour!</a> */}
                </div>
            </div>
        </div>
    );
}

export default About;
