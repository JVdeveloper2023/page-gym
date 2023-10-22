/*import Image from "next/image";
import { FC } from "react";


interface ServiceProps{
    image: string
    title: string,
    description: string
}

const Service: FC<ServiceProps> = ({image, title, description}) => {
    return ( 
        <div className='space-y-5 flex flex-col items-center'>
      <div className='relative w-20 h-20'>
        <Image src={image} alt='Image' fill className='object-cover' />
      </div>
      <h3 className='text-2xl text-white font-semibold'>{title}</h3>
      <p className='text-center max-w-sm'>{description}</p>
    </div>
     );
}
 
export default Service;*/

import Image from "next/image";
import { FC } from "react";

interface ServiceProps{
    image: string
    title: string,
    description: string
}

const Service: FC<ServiceProps> = ({image, title, description}) => {
    return ( 
        <div className='space-y-5 flex flex-col items-center'>
            <div className='relative w-20 h-20'>
                <Image src={image} alt='Image' fill sizes="(max-width: 700px) 30vw, 80px" className='object-cover' />
            </div>
            <h3 className='text-2xl text-white font-semibold'>{title}</h3>
            <p className='text-center max-w-sm'>{description}</p>
        </div>
     );
}
 
export default Service;
