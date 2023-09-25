const Blogs = ()=>{
    return (
        <div className="bg-blue-200 h-full bg-cover">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Blogs</h1>
            </div>
            
            <ul className="marker:text-black list-disc pl-5 space-y-3 text-lg px-5 py-5">
                <li className="underline underline-offset-1">
                    <a href="https://medium.com/@sourashree/media-queries-in-css-6e646a56fef3">
                        Media Queries
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Blogs;