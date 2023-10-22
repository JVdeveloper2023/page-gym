import { RiWhatsappFill } from "react-icons/ri";

const FixedButton = () => {
    return ( 
        <div className="fixed bottom-10 right-10 rounded-xl z-50 bg-black/50">
            <div >
             
            <a href=""className=" flex items-center " >
            <p className=" bg-transparent font-medium text-xl text-green-300 border-1 p-2 border-white rounded-lg">Write to us, start now!</p>
                <RiWhatsappFill className="w-16 h-16 text-primary border-2 border-green-300 bg-transparent rounded-full hover:bg-green-400"/>

            </a>
            </div>
        </div>
        
     );
}
 
export default FixedButton;