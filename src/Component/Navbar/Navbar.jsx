import { navStyle, containerStyle, titleWrapper, navLogo, navButtonContainer, navButtons, navHeading,  } from "./navbarStyle";


function Navbar() {
  return (
    <>
        <nav className={navStyle}>
            <div className={containerStyle}>
                <div className={titleWrapper}>
                    <img 
                        className={navLogo}
                        src="https://files.codingninjas.in/pl-ninja-16706.svg" 
                        alt="Logo" 
                    />

                    {/* Heading */}
                    <h4 className={navHeading}>E-Learning</h4>
                </div>
                <div className={navButtonContainer}>
                    <button className={navButtons}>Login</button>
                    <button className={navButtons}>Courses</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;