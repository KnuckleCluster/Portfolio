function Portfolio(){
    return(
        <>
        <div className="flex justify-center items-center">
            <div className="w-full md:w-[70vw] h-[500px] ">
                <hr />
                <h1 className="text-center text-[35px] text-green-400">Projects</h1>
                <hr />
                <div className="flex flex-row mt-[50px] justify-center">
                    <div className="mr-[50px] group flex relative flex-col">
                        <a href="https://austin-kappa.vercel.app/"><img src="img/austin.png" alt="Austin" className="w-[250px] h-[250px] rounded-[15px]"/></a>
                        <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 w-[250px] h-[130px] text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Austin is a fanmade Post Malone album site that lets you learn more about the album and play songs that are in the album. <br /> <br /> (Click here to visit Austin!)</span>
                        <h1 className="text-center text-white text-[20px]">Austin</h1>
                    </div>
                    <div className="mr-[50px] group flex relative flex-col">
                        <a href="https://austin-kappa.vercel.app/"><img src="img/library-app.png" alt="Library-App" className="w-[250px] h-[250px] rounded-[15px]"/></a>
                        <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 w-[300px] h-[110px] text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">A simple CRUD app in a form of library app. <br /> <br /> (Click here to visit the Library-app!)</span>
                        <h1 className="text-center text-white text-[20px]">Library-App</h1>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolio;
