const Projects = ()=>{
    return (
        <div>
            <div className="h-[300px] mx-2 w-[300px] lg:w-[340px] shadow-xl bg-blue-300 dark:bg-gray-700 rounded-xl">
                <h1 className="text-center lg:text-3xl py-2 font-bold shadow-md dark:text-white  dark:shadow-gray-600 text-2xl ">Projects</h1> 
                <div className=" px-6 py-4">
                    <ul className="list-decimal px-6 sm:text-sm">
                    <li className="dark:text-gray-300 py-2 ">One Click Food - 
                        <span className="font-bold dark:text-white">React App</span>
                        <div className="flex font-thin">
                            <ul className="py-1">
                                <li>Date: December, 2022</li>
                                <li>A food ordering app.</li>
                            </ul>   
                        </div>
                        
                    </li>
                    <li className="dark:text-gray-300">Graphs - 
                        <span className="font-bold dark:text-white">Angular Application</span>
                        <div className="font-thin">
                            <ul>
                                <li>Date: August 2023</li>
                                <li className="underline">
                                <a href="https://projects.sourashreeart.com/">https://projects.sourashreeart.com/</a>
                                </li>
                            </ul>       
                        </div>                   
                    </li>
                    </ul>
                    
                    {/* <div>ChatGPT - 
                        <span className="font-bold">React</span>
                        <div className="font-thin">
                            Date
                            Short Description
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Projects;