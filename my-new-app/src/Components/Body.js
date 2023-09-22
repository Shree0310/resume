import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Header from "./Header";
import Projects from "./Projects";
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
                
                
                <div className="w-[480px] py-8">
                    <SideNavBar/>
                </div>

                <div>
                    <Quotation/>
                    
                </div>
            
        
        
            </div>
    
        </div>
    )
}

export default Body;
