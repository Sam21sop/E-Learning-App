import { NavLink, Outlet, Link } from "react-router-dom";
import { navStyle, containerStyle, titleWrapper, navLogo, navButtonContainer, navButtons, navHeading,  } from "./navbarStyle";


function Navbar() {
  return (
    <>
        <nav className={navStyle}>
            <div className={containerStyle}>
                <div className={titleWrapper}>
                    <Link to='/'>
                        <img 
                            className={navLogo}
                            src="https://files.codingninjas.in/pl-ninja-16706.svg" 
                            alt="Logo" 
                        />
                    </Link>

                    {/* Heading */}
                    <h4 className={navHeading}>E-Learning</h4>
                </div>
                <div className={navButtonContainer}>
                    <button className={navButtons}>Login</button>
                    <button className={navButtons}>
                        <NavLink to='/courses'>
                            {/* {({isActive}) => (isActive ? "Home" : "Courses")} */}
                            Courses
                        </NavLink>
                    </button>
                </div>
            </div>
        </nav>

        <Outlet/>
    </>
  )
}

export default Navbar;