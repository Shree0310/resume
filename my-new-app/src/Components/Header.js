import Contacts from "./Contacts";
import { Link  } from "react-router-dom";


const Header = ()=>{
    return (
        <div className="p-6 flex justify-between shadow-xl bg-blue-200 dark:bg-gray-500 rounded-lg">
            <h1 className="px-4 lg:text-2xl font-bold dark:text-white text-xl">Sowrasree Banerjee</h1>
            {/* <h1 className="font-bold text-3xl">
                Frontend Developer
            </h1> */}
            
           <div className="">
                <Contacts/>
           </div>

        <div className="flex justify-end">
            <h1 className="lg:text-2xl px-6 font-bold dark:text-white text-xl">
               <Link to="/blogs">
                Blogs
               </Link>
                   
               </h1>
            <h1 className="lg:text-2xl px-6 font-bold dark:text-white text-xl">
               <Link to="/">
                    Home
               </Link>
                  
                </h1>
        </div>
            
        </div>
    )
}

export default Header;