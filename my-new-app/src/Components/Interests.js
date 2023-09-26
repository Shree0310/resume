const Interests =() =>{
    return (
        <div className="mx-2">
            <div className="h-[180px] w-[300px] lg:w-[340px] lg:h-[182px] bg-orange-200 dark:bg-gray-400 rounded-xl sm:h-[140px]">
                <div className="py-2 sm:py-1">
                            <h3 className="text-center text-3xl py-2 shadow-md font-bold px-2 dark:text-black dark:shadow-gray-500">Interests</h3>
                            <ul class="marker:text-black list-disc pl-5 space-y-3 py-3 px-3 leading-4 text-justify">
                                <div className="px-3 py-1">
                                    <li>Design</li>
                                    <li>Writing</li>
                                    <li>Art</li>
                                </div>
                                
                            </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Interests;