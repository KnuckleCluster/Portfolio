function Skills() {
    return (
      <div className="flex justify-center items-center">
        <div className=" w-[900px] h-[250px] rounded-[10px] ">
          <hr />
          <h1 className="text-center text-[35px] text-green-400">Skills</h1>
          <hr />
          <br /> <br />
          <div className="flex justify-center">
            <div className="flex flex-col items-center m-[20px] ">
              <img src="img/MERN.png" alt="MERN Stack" className="w-[230px] h-[100px]" />
              <br />
              <p className="text-white">MERN Stack</p>
            </div>
            <div className="flex flex-col items-center m-[20px]">
              <img src="img/js.png" alt="JavaScript" className="w-[100px] h-[100px]" />
              <br />
              <p className="text-white">JavaScript</p>
            </div>
            <div className="flex flex-col items-center m-[20px]">
              <img src="img/python.png" alt="Python" className="w-[100px] h-[100px]" />
              <br />
              <p className="text-white">Python</p>
            </div>
            <div className="flex flex-col items-center m-[20px]">
              <img src="img/tailwind.png" alt="TailwindCSS" className="w-[100px] h-[100px]" />
              <br />
              <p className="text-white">TailwindCSS</p>
            </div>
            <div className="flex flex-col items-center m-[20px]">
              <img src="img/mysql.png" alt="MySQL" className="w-[140px] h-[100px]" />
              <br />
              <p className="text-white">MySQL</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
  