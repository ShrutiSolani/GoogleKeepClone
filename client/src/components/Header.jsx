import './Header.css';
// import { FaLightbulb } from "react-icons/fa";
import { SiGooglekeep } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";

function Header(){
    return <header>
    <AiOutlineMenu />
    <SiGooglekeep className="logo"/>
    Keep</header>
}

export default Header;