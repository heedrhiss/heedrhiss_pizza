import { Link } from "react-router-dom";

function LinkButton({to, children}) {
    const className = "text-blue-500 hover:text-blue-600 hover:underline";
    if(to === '-1') return <button className={className} to={to} onClick={() => navigate(-1)}>{children}</button>

    return (
        <Link className={className} to={to}>{children}</Link>
    )
}

export default LinkButton
