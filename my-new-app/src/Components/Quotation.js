import Education from "./Education";
import Interests from "./Interests";
import Projects from "./Projects";

const Quotation =()=>{
    return (
        <div className="py-8">
            <div className="h-[150px] mx-2 w-[300px] bg-orange-200 dark:bg-gray-300 rounded-xl">
                <h1 className="text-center text-3xl py-2 font-bold shadow-md dark:text-black  dark:shadow-gray-400">Love to quote</h1> 
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