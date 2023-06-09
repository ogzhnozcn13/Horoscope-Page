import "./Navbar.scss";
import logo from "../../helpers/logo.png";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <a href="#horocopes">Horoscope</a>
                <a href="#daily">Daily</a>
                <a href="#article">Article</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar