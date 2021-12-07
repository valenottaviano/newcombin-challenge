import { Fragment } from "react";
import {Link} from 'react-router-dom'

export default function NavBar(props){
    return <Fragment>
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-link"><Link to='/'>Home</Link></li>
                <li className="nav-link"><Link to='/information'>Information</Link></li>
            </ul>
        </nav>
        <style jsx="true">{`
        .navbar{
            width: 80%;
            margin: auto;
        }
        .nav-links{
            display:flex;
            align-items:center;
            justify-content: space-around;
            min-height: 10vh;
        }
        `}</style>
    </Fragment>
}