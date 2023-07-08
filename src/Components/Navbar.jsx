
function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark" id="navbar">
        <div className="navbar-container">
            <a href="#" className="navbar-brand">
                <img src="./Images/sj-logo.jpg" alt="San Jose Earthquakes logo" className="navbar-logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#club" className="nav-link">Club</a>
                    </li>
                    <li className="nav-item">
                        <a href="#fixture-table" className="nav-link">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Rumors</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;