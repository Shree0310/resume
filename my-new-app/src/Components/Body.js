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
                
                        <div className="flex">
                            <Experiences/>
                        </div>
                        {/* <div className="flex" >
                            <AboutMe/>
                        </div> */}
                    </div>
                
                
                

                <div>
                    <Quotation/>
                    
                </div>
                <div className="w-[500px] py-8">
                    <SideNavBar/>
                </div>
            
        
        
            </div>
    
        </div>
    )
}

export default Body;
