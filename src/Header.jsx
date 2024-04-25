import { Link } from "react-router-dom"
import logo from "./assets/logo.svg"
import About from './About'
function Header() {
  return (
    
    <div className=" p-md-5 container border border-dark" id="maincontainer">
      <div className="text-center">
        <img src={logo} id="logo"></img>
      </div> 
      <div className="text-center mt-3 p-1 row">
        <div className="col">
          <Link style={{textDecoration: 'none'}} to={"/HomePage"}>
            <h5>Home</h5>
          </Link>
        </div>
        <div className="col">
          <Link style={{textDecoration: 'none'}} to={"/"}>
            <h5>Menu</h5>
          </Link>
        </div>
        <div className="col">
          <Link style={{textDecoration: 'none'}} to={"/ContactPage"}>
            <h5>Contact</h5>
          </Link>
        </div>
        <div className="col">
          <Link style={{textDecoration: 'none'}} to={"/About"}>
            <h5>About</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header