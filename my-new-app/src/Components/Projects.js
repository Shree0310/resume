const Projects = ()=>{
    return (
        <div>
            <div className="h-[300px] mx-2 w-[400px] shadow-xl bg-blue-300 rounded-xl">
                <h1 className="text-center text-3xl py-2 font-bold shadow-md ">Projects</h1> 
                <div className=" px-6 py-2">
                    <ul className="list-decimal px-6">
                    <li >One Click Yummy Food - 
                        <span className="font-bold">React Application</span>
                        <div className="flex font-thin">
                            <ul>
                                <li>Date: December, 2022</li>
                                <li>A food ordering app.</li>
                            </ul>   
                        </div>
                        
                    </li>
                    <li>Graphs - 
                        <span className="font-bold">Angular Application</span>
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