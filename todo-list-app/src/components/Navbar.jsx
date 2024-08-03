const Navbar = ()=>{
    return (
        <nav className="bg-indigo-900 flex justify-around text-white py-2">
            <div className="logo">
                <span className="text-xl font-bold text-white mx-9">iTask</span>
            </div>
            <ul className="flex gap-6 mx-9">
                <li className="cursor-pointer hover:font-bold transition-all ">Home</li>
                <li className="cursor-pointer hover:font-bold transition-all ">Your Tasks</li>
            </ul>
        </nav>
    )
}
export default Navbar