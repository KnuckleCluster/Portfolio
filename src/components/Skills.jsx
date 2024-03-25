function Skills() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-[70vw] h-full pb-[50px] ">
        <div className="pb-[25px]">
        <hr />
        <h1 className="text-center text-[35px] text-green-400">Skills</h1>
        <hr />
        </div>

        <div className="flex justify-center mt-[50px]">

          <div className="flex flex-col items-center m-[20px] gap-3">
            <img src="img/MERN.png" alt="MERN Stack" className="w-[150px] md:w-[230px] h-[80px] md:h-[100px]" />
            <p className="text-white">MERN Stack</p>
          </div>

          <div className="flex flex-col items-center m-[20px] gap-3">
            <img src="img/js.png" alt="JavaScript" className="w-[80px] md:w-[100px] h-[80px] md:h-[100px]" />
            <p className="text-white">JavaScript</p>
          </div>

          <div className="flex flex-col items-center m-[20px] gap-3">
            <img src="img/python.png" alt="Python" className="w-[80px] md:w-[100px] h-[80px] md:h-[100px]" />
            <p className="text-white">Python</p>
          </div>

          <div className="flex flex-col items-center m-[20px] gap-3">
            <img src="img/tailwind.png" alt="TailwindCSS" className="w-[80px] md:w-[100px] h-[80px] md:h-[100px]" />
            <p className="text-white">TailwindCSS</p>
          </div>

          <div className="flex flex-col items-center m-[20px] gap-3">
            <img src="img/mysql.png" alt="MySQL" className="w-[100px] md:w-[140px] h-[80px] md:h-[100px]" />
            <p className="text-white">MySQL</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
