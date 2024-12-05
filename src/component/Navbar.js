import { NavLink } from "react-router-dom";

const Navbar = () => {

    const activeStyle = {
        backgroundColor: "black",
        color: "white"
    };
    
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => 
                        isActive ? activeStyle : null
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menupage" style={({isActive}) => 
                        isActive? activeStyle : null
                    }>Menupage</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar;