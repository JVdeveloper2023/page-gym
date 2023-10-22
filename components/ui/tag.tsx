import { cn } from "@/libs/utils";
import { FC } from "react";

interface TagProps{
    text: string
    className?: string;
    active?: boolean;
}

const Tag: FC<TagProps> = ({text,className,active}) => {
    return ( 
    
    <span className={cn("py-1 px-2 bg-gray-ligth/30 rounded-lg",
        active && 'bg-primary text-white', 
        className)} >
            
             {text}
    </span>
     );
}
 
export default Tag;
