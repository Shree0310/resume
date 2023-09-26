import Capg from "./Capg";
import Epam from "./Epam";

const Experiences = ()=>{
    return (
        <div className="lg:px-2">
            <div className="lg:h-[970px] h-[930px] mx-0 lg:my-8 my-4 lg:w-[600px] w-[650px] shadow-xl bg-blue-200 dark:bg-gray-500 rounded-3xl">
                <h1 className="text-center lg:text-3xl py-2 font-bold shadow-md dark:text-white dark:shadow-gray-600 text-2xl">Experiences</h1>
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