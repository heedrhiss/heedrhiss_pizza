import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        if (!query) return;
        navigate(`/order/${query}`);
    }

    return (
        <header>
            <Link to= '/'>Heedrhiss Pizza</Link>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search order id #" value={query} onChange={e=> setQuery(e.target.value)} /> 
            </form>
            <p>Heedrhiss</p>
        </header>
    )
}

export default Header
