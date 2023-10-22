import { cn } from '@/libs/utils';
import { FC } from 'react';
import MainMenu from './main-menu';

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={cn(
          'fixed left-0 top-0 w-[80%] sm:w-[40%] h-full z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out',
          !isOpen ? '-left-full' : 'left-0'
        )}
      >
        <MainMenu />
      </div>
      <div
        onClick={onClose}
        className={cn(
          'fixed left-0 top-0 w-full h-full bg-black/30 z-40',
          !isOpen ? 'hidden' : 'block'
        )}
      />
    </>
  );
};

export default MenuMobile;