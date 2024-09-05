import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Username from "../user/Username";

function Header() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        if (!query) return;
        navigate(`/order/${query}`);
    }

    return (
        <header className="flex flex-col sm:flex-row items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
            <Link to= '/' className="text-2xl tracking-widest sm:tracking-[0.5rem] font-bold">Heedrhiss Pizza</Link>
            <form onSubmit={handleSubmit}>
            <input type="text" className="px-4 py-2 text-md focus:outline-none focus:ring-2 ring-black w-28 rounded-full bg-yellow-200 placeholder:text-stone-500 sm:w-64 sm:focus:w-72 transition-all duration-300" placeholder="Search order id #" value={query} onChange={e=> setQuery(e.target.value)} /> 
            </form>
            <Username/>
        </header>
    )
}

export default Header
