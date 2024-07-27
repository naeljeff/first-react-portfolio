import "./navbar.scss"
import {PhoneIphone, Mail, LinkedIn} from "@material-ui/icons";

export default function Navbar({ isMenuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (isMenuOpen && "active")}>
            <div className="container">
                <div className="left-container">
                    <a href="#mainPage" className="logo">nael</a>
                    <div className="item-container">
                        <PhoneIphone className="item-icon"/> <span>+62-812-22753753</span>
                    </div>
                    <div className="item-container">
                        <Mail className="item-icon" /> <span>nael@phoodto.com</span>
                    </div>
                    <div className="item-container">
                        <LinkedIn className="item-icon" /> <span>linkedin.com/in/nathanael-jeffrey</span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="hamburger" onClick={ () => setMenuOpen(!isMenuOpen)}>
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
