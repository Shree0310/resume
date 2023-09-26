import Education from "./Education";
import Interests from "./Interests";
import Projects from "./Projects";

const Quotation =()=>{
    return (
        <div className="lg:py-8 py-4">
            <div className="h-[150px] mx-2 w-[300px] lg:w-[340px] bg-orange-200 dark:bg-gray-400 rounded-xl">
                <h1 className="text-center lg:text-3xl py-2 font-bold shadow-md dark:text-black  dark:shadow-gray-500 text-2xl">Love to quote</h1> 
                <p className="px-6 py-2">This too shall Pass.....</p>
            </div>
            <div className="py-2">
                <Projects/>
            </div>
            <div>
                <Education/>
            </div>
            <div className="py-2">
                <Interests/>
            </div>
        </div>       
    )
}

export default Quotation;