import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
      
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="react-deltasaca/">WELCOME TO THE OFFICIAL WEBSITE OF DELTA STATE AGENCY FOR THE CONTROL OF HIV/AIDS</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="react-deltasaca/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="react-deltasaca/contact">Contact</Link>
          </li>
          
          
          
        </ul>
        
      </div>
    </div>
  </nav>
      
    )
  }
  
  export default NavBar
  
  