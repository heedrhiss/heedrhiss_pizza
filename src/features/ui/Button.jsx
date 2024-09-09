import { Link } from "react-router-dom"

function Button({disabled, children, to, type, onClick}) {
    const base = "bg-yellow-400 text-sm inline-block uppercase font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-95 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-300 disabled:bg-red-400 disabled:cursor-progress"
    
    const styles = {
        primary: base + ' px-4 py-3',
        small: base + " px-3 py-1 text-xs sm:text-sm",
        secondary: "hover:bg-stone-400 text-stone-500 text-sm inline-block uppercase font-semibold rounded-full border border-stone-400 transition-all duration-300 hover:scale-95 focus:outline-none focus:border-0 focus:ring focus:ring-offset-2 focus:ring-stone-300 focus:bg-stone-300 hover:text-stone-800 disabled:bg-red-400 disabled:cursor-progress  px-4 py-2.5",
        update: base + " px-2 py-1 text-xs font-semibold sm:text-sm",
    }
    const className = styles[type];

    if(to) return <Link to={to} className={className}>{children}</Link>

    return (
        <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button
