import { Outlet, NavLink } from "react-router-dom";

function Layout(){
    return(
        <div className="container">
            <header>
                {/* <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="#">Kellatöökoda</a>
                        </div>
                        <ul className="nav navbar-nav">
                        
                        <li><NavLink to="/">Esileht</NavLink></li>
                        <li><NavLink to="/news">Uudised</NavLink></li>
                        <li><NavLink to="/contact">Kontakt</NavLink></li>
                        <li><NavLink to="/services">Teenused</NavLink></li>
                        <li><NavLink to="/images">Pildid</NavLink></li>
                        </ul>
                    </div>
                </nav> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" >Kellatöökoda</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={"nav-link"}>Esileht</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/news" className={"nav-link"}>Uudised</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={"nav-link"}>Teenused</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink to="/images" className={"nav-link"}>Pildid</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink to="/contact" className={"nav-link"}>Kontakt</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
                <Outlet />
            <footer>jalus</footer>
        </div>
    )
}

export default Layout;