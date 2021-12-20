import "./Menu.scss";

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className= {"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Inicio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#aboutme">Sobre mi</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#resume">Avances</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonios</a>
                </li >
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contactame</a>
                </li>
            </ul>
        </div>
    )
}
