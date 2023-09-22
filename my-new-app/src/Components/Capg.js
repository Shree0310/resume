const Capg = ()=>{
    return (
        <div className="transition ease-in-out delay-100
        hover:-translate-y-1 hover:scale-95 cursor-pointer 
        rounded-3xl h-auto shadow-xl bg-blue-300 py-8 px-2">
            
            <h1 className="py-1 text-left px-3 text-xl font-bold">Capgemini India</h1>

            <h2 className="text-md font-medium px-3 py-1">Associate Consultant</h2>

            <div className="flex px-3 text-gray-700">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <h3 className="px-2 text-xs py-0">
                    August, 2019 - April, 2023
                </h3>
            </div>
            

            
            <div className="">
                <p className="px-3 py-1 leading-6 font-bold text-md text-justify">
                    <ul className="marker:text-black list-disc pl-5 space-y-3 ">

                        <li> Developed features for an application Relationship Manager that is
                        used to visualise various relationships between the resources.</li>
                        
                        <li>Developed a feature to enable Excel and Json file export. Using this
                        functionality the user could export certain data from angular
                        application into their local machine in either excel or Json format. This
                        helped users to internally share their information in offline formats</li>

                    </ul>       
                </p>
            </div>
          
        </div>
    )
}

export default Capg;