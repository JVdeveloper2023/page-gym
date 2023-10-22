

import { Link } from 'react-scroll'
import ButtonPrimary from "../ui/button-primary";

const MainMenu = () => {
    return (
        <ul className="flex flex-col gap-5 lg:flex-row items-center lg:gap-2">
            <li>
                <Link to="home" smooth={true} className="p-4 text-white border-b-2 border-transparent hover:border-primary transition-colors duration-300 cursor-pointer ">Home</Link>
            </li>
            <li>
                <Link to="services" smooth={true} className="p-4 text-white  border-b-2 border-transparent hover:border-primary transition-colors duration-300 cursor-pointer">Services</Link>
            </li>
            <li>
                <Link to="about" smooth={true} className="p-4 text-white border-b-2 border-transparent hover:border-primary transition-colors duration-300 cursor-pointer">About</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} className="p-4 text-white border-b-2 border-transparent hover:border-primary transition-colors duration-300 cursor-pointer">Contact</Link>
            </li>
           
            <li>
                <ButtonPrimary type='button' text='Join us' />
            </li>
           
        </ul>
      );
}
 
export default MainMenu;

