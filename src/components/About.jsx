import Title from "./Title";

function About() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className=" w-[900px] h-[850px] rounded-[10px] ">
                    <div className="flex flex-col justify-center items-center text-white text-center">
                        <h1 className="text-[30px] bg-transparent font-bold text-green-400">Welcome to my portfolio!</h1>
                        <br />
                        <div className="flex justify-center items-center bg-transparent">
                            <img className="w-[250px] h-[250px] bg-transparent" src="img/me.png" alt="photo" />
                            <br /> <br />
                        </div>
                        <br />
                        <h3 className="text-bold text-[45px] underline bg-transparent">Eugene Kyle Anarna</h3>
                        <br /><br /> <br /> 
                        <Title />
                        <br /><br /> <br /><br />
                        <div className="w-[800px] text-left">
                            <p>
                                Hey there! I'm Eugene Kyle Anarna, a software engineer passionate about crafting digital experiences.
                                <br /> <br />
                                I specialize in the MERN Stack and love working with JavaScript, Python, and TailwindCSS. I'm also comfortable diving into mySQL databases.
                                <br /> <br />
                                Beyond coding, I've explored System Administration and Network Management, rounding out my skill set for a holistic understanding of tech infrastructure.
                                <br /> <br />
                                I thrive on challenges, constantly learning and adapting. Whether it's mastering a new framework or troubleshooting complex systems, I'm up for it.
                                <br /> <br />
                                Driven by curiosity, I'm always on the lookout for the next big thing in tech. When I'm not coding, I enjoy exploring the latest advancements or tinkering with side projects.
                                </p>
                                <br />
                                <p className="text-center text-[20px] text-bold text-green-400">Let's connect and build something awesome together!</p>
                        </div>
                        <br />
                        {/* <a className="border bg-transparent text-white p-[10px] rounded-[10px] hover:text-green-400  hover:bg-blue-950 hover:border-green-600" href="#">Lets begin the tour!</a> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
