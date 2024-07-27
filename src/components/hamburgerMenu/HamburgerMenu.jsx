import "./hamburgerMenu.scss"

export default function HamburgerMenu({isMenuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (isMenuOpen && "active")}>
            <ul>
                <li onClick = { () => setMenuOpen(false)}>
                    <a href="#mainPage">Homepage</a>
                </li>
                {/* <li onClick = { () => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li> */}
                <li onClick = { () => setMenuOpen(false)}>
                    <a href="#project">Project</a>
                </li>
                <li onClick = { () => setMenuOpen(false)}>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    )
}
