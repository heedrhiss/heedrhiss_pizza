import { Link } from "react-router-dom"

function Button({disabled, children, to, type}) {
    const base = "bg-yellow-400 inline-block uppercase font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-95 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 disabled:bg-red-400 disabled:cursor-progress"
    
    const styles = {
        primary: base + ' px-4 py-3',
        small: base + " px-3 py-1 text-xs sm:text-sm"
    }
    const className = styles[type];

    if(to) return <Link to={to} className={className}>{children}</Link>

    return (
        <button className={className} disabled={disabled}>{children}</button>
    )
}

export default Button
