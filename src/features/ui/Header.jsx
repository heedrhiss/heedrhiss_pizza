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
        <header className="bg-yellow-500 uppercase p-2 sm:p-4 text-black flex items-center justify-between">
            <Link to= '/' className="text-2xl tracking-widest sm:tracking-[0.5rem] font-bold">Heedrhiss Pizza</Link>
            <form onSubmit={handleSubmit}>
            <input type="text" className="p-2" placeholder="Search order id #" value={query} onChange={e=> setQuery(e.target.value)} /> 
            </form>
            <Username/>
        </header>
    )
}

export default Header
