import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/Authprovider";


const Navbar = () => {
    const { user ,logout} = useContext(AuthContext);

    const handleLogout=()=>{
        logout()
        .then()
        .catch(error => console.log(error))
    }
    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink ></li>
        <li><NavLink to={'./about'}>About</NavLink ></li>
        <li><NavLink to={'./career'}>Career</NavLink ></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10 mr-5 rounded-full">
                        <img alt="user Image" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    {
                        user ?
                            <Link onClick={handleLogout} className="btn btn-ghost">Sign Out</Link>
                            : <Link to={'/login'} className="btn btn-ghost">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar; 