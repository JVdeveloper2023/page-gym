import { FC, ReactNode } from 'react';
import { cn } from '@/libs/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('container mx-auto px-5 lg:px-28', className)}>
      {children}
    </div>
  );
};

export default Container;