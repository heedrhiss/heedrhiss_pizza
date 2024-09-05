import { Link } from "react-router-dom"

function Button({disabled, children, to}) {
    const className = "bg-yellow-400 px-4 py-3 inline-block uppercase font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-95 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 disabled:bg-red-400 disabled:cursor-progress";
    
    if(to) return <Link to={to} className={className}>{children}</Link>

    return (
        <button className={className} disabled={disabled}>{children}</button>
    )
}

export default Button
