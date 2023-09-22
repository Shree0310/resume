import Contacts from "./Contacts";

const Header = ()=>{
    return (
        <div className="p-6 flex justify-between shadow-xl bg-blue-200 rounded-lg">
            <h1 className="px-4 text-2xl font-bold">Sowrasree Banerjee</h1>
            {/* <h1 className="font-bold text-3xl">
                Frontend Developer
            </h1> */}
            
           <div className="">
                <Contacts/>
           </div>



            <h1 className="text-2xl px-10 font-bold">Home</h1>
        </div>
    )
}

export default Header;