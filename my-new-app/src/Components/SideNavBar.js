import Socials from "./Socials";

const SideNavBar = ()=>{
    return (
        <div className="flex flex-wrap shadow-lg rounded-3xl   bg-orange-200 dark:bg-gray-500 h-[950px] lg:h-[970px]">

            <div>
                
                    <div>
                        <h1 className="text-center lg:text-3xl py-1 font-bold shadow-md dark:text-white  dark:shadow-gray-600 text-2xl ">About Me</h1>
                    </div>

                <div className="flex justify-center">
                        <div className="">
                            <img alt="my profile" className="rounded-full px-10 py-4 h-[250px] w-[280px] "
                                src="https://shree0310.github.io/profile_pic/WhatsApp%20Image%202023-05-23%20at%2010.31.50%20AM.jpeg"/>
                        </div> 
                       
                </div>    

                <div className="flex justify-center">
                            <Socials/>
                        </div>
                    
               
                
                
                <div className="px-5 ">

                    <div>
                        <h3 className="font-bold px-2 bg-orange-400 dark:bg-gray-700 dark:text-white ">Personal</h3>
                    </div>
                    <div>   
                        <p className="py-3 px-3 leading-4 font-serif text-justify">
                            I'm a frontend developer proficient in React and Angular, blending the strengths of both frameworks.
                            With a focus on user-centric design and clean coding, I transform ideas into exceptional web solutions. 
                            Let's team up to elevate your digital presence and bring your vision to life.
                        </p>
                    </div>                      
                    <div>
                        <h3 className="font-bold px-2 bg-orange-400 dark:bg-gray-700 dark:text-white">Certifications</h3>
                    </div>
                    <div>
                        <p className="py-3 px-3 leading-4 text-justify">Microsoft Azure Fundamentals Certified </p>
                    </div>
                    
                    <div>
                        <div>
                            <h3 className="font-bold px-2 bg-orange-400 dark:bg-gray-700 dark:text-white">Skills</h3>
                        </div>
                        
                        <ul className="font-bold">
                            
                                <li className=" flex py-3 px-3">
                                    Angular 13
                                    <div className="px-8 py-1">
                                        <div className="mb-6 h-5 w-60 bg-neutral-200">
                                        <div className="h-5 bg-blue-500 dark:bg-black w-40"></div>
                                        </div>
                                    </div>
                                </li>

                                <hr className="border-dashed bg-gray-400"></hr>
                       
                            
                            <li className="flex flex-wrap py-2 px-3">
                                React
                                <div className="px-[70px] py-1">
                                <div className="mb-6 h-5 w-60 bg-neutral-200">
                                    <div className="h-5 bg-blue-500 dark:bg-black w-36"></div>
                                    </div>
                                </div>                                  
                            </li>

                            <hr className="border-dashed bg-gray-400"></hr>

                            <li className=" flex py-4 px-3">
                                Javascript
                                <div className="px-9 py-2">
                                <div className="mb-6 h-5 w-60 bg-neutral-200">
                                    <div className="h-5 bg-blue-500 dark:bg-black w-20"></div>
                                    </div>
                                </div>
                                
                            </li>

                            <hr className="border-dashed bg-gray-400"></hr>

                            <li className=" flex py-3 px-3">
                                Html
                                <div className="px-20 py-1">
                                <div className="mb-6 h-5 w-60 bg-neutral-200">
                                    <div className="h-5 bg-blue-500 dark:bg-black w-32"></div>
                                    </div>
                                </div>    
                            </li>

                            <hr className="border-dashed bg-gray-400"></hr>
                            
                            <li className="flex py-2 px-3">
                            Tailwind CSS
                            <div className="px-6 py-1">
                            <div className="mb-6 h-5 w-60 bg-neutral-200">
                                    <div className="h-5 bg-blue-500 dark:bg-black w-16"></div>
                                    </div>
                            </div>
                            </li>

                        </ul>
                        
                    </div>
                    {/* <div className="py-2">
                        <h3 className="font-bold px-2 bg-orange-400">Interests</h3>
                        <ul class="marker:text-black list-disc pl-5 space-y-3 py-3 px-3 leading-4 text-justify">
                            <li>Design</li>
                            <li>Writing</li>
                            <li>Art</li>
                        </ul>
                    </div> */}
                    <div>
                        {/* <Education/> */}
                    </div>
                </div>
                          

            </div>

        </div>
    )
}

export default SideNavBar; 