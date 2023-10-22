import Link from "next/link";
import { RiFacebookCircleLine,RiInstagramLine,RiWhatsappLine } from "react-icons/ri";

const Social = () => {
    return ( 
        <section>
            <ul className="flex flex-col  gap-3">
                <li className=" hover:text-primary">
                    <a href="" className="flex flex-row gap-2"> 
                        <RiFacebookCircleLine className="w-6 h-6"/> 
                        <p>Facebook</p>
                    </a>
                </li>
                <li className=" hover:text-primary" >
                    <a href="" className="flex flex-row gap-2"> 
                        <RiInstagramLine className="w-6 h-6 hover:text-primary"/>
                        <p>Instagram</p>
                    </a>
                </li>
                <li className=" hover:text-primary">
                    <a href="" className="flex flex-row gap-2"> 
                        <RiWhatsappLine className="w-6 h-6 hover:text-primary"/>
                        <p>Whatsapp</p>
                    </a>
                </li>
            </ul>
                    
            
                
            
        </section>
     );
}
 
export default Social;