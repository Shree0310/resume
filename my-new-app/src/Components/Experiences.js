import Capg from "./Capg";
import Epam from "./Epam";

const Experiences = ()=>{
    return (
        <div>
            <div className="h-[950px] mx-0 my-8 w-[590px] sm:w-[650px] shadow-xl bg-blue-200 dark:bg-gray-500 rounded-3xl">
                <h1 className="text-center text-3xl py-2 font-bold shadow-md dark:text-white dark:shadow-gray-600 ">Experiences</h1>
                <div className="px-8 py-3">
                    <Epam/> 
                </div>
                <div className="px-8">
                    <Capg/>
                </div>
            </div>
        </div>
        
    )
}

export default Experiences;