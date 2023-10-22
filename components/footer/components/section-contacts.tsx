import { FC } from "react";

interface SectionContactProps{
    title: string
    list: string[]
}

const SectionContact:FC<SectionContactProps> = ({title, list}) => {
    return (
        <section className="flex flex-col gap-5">
            <h5 className="font-medium text-xl">{title} </h5>
            <ul className="space-y-3 text-gray-ligth">
                {list.map((link,index)=>(
                    <li key={index}>
                        {link}
                    </li>
                ))}
                
            </ul>
        </section>
      );
}
 
export default SectionContact;