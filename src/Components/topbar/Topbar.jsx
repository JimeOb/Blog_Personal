import "./Topbar.scss";
import {TiMail } from 'react-icons/ti';
import {FaPhoneAlt} from 'react-icons/fa';
import Logo_nombre from "../../assets/Logo_nombre.png";
import Logo_blancoN from "../../assets/Logo_blancoN.png";


export default function Topbar({menuOpen,setMenuOpen}) {

    
    
   
    return (
        <div className= {"topbar " + (menuOpen && "active")}>
           <div className="wrapper">

            <div className="left">
                <a href="#intro" className="logo"><img src={menuOpen ? Logo_blancoN  : Logo_nombre} alt="Jersson Ortegate Logo"/></a>
                <div className="itemContainer">
                    <TiMail className="icon"/>
                    <span> devportegate@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <FaPhoneAlt className="icon"/>
                    <span> +57 320 3845699</span>
                </div>
            </div>
            <div className="right">
                <div className="slider" onClick={()=> setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>

           </div>
        </div>
    )
}
