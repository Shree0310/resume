import Experiences from "./Experiences";
import Header from "./Header";
import Quotation from "./Quotation";
import SideNavBar from "./SideNavBar";


const Body = ()=>{
    return (
        <div>
            <div>
                <Header/>     
            </div>
            <div className="flex flex-wrap">
                    <div className="">
                
                        <div className="flex sm:px-1">
                            <Experiences/>
                        </div>
                        {/* <div className="flex" >
                            <AboutMe/>
                        </div> */}
                    </div>
                
                
                

                <div>
                    <Quotation/>
                    
                </div>
                <div className="w-[1000px] px-36 lg:w-[520px] lg:px-2 lg:py-8 ">
                    <SideNavBar/>
                </div>
            
        
        
            </div>
    
        </div>
    )
}

export default Body;
