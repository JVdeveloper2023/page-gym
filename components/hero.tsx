"use client";
import { AiOutlineClose } from 'react-icons/ai';

import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "./ui/button-primary";

import { useState } from "react";
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Hero = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        console.log('Opening modal...');
        setOpen(true);
    };
  const onCloseModal = () => setOpen(false);

  const CloseIcon = () => (
    <AiOutlineClose className="h-10 w-10 text-primary" />  
  );
  

  

    return ( <section id="home" >
                <div className="relative w-full h-screen">
                    <Image src='/images/hero.webp' alt="hero" fill className="object-cover" />
                    <Container>
                        <div className='absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full' />
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-32 -translate-x-1/2 lg:translate-x-0 space-y-10'>
                            <h1 className='text-white text-6xl lg:text-8xl font-semibold text-center lg:text-left'>
                            Your body <br /> Will transform
                            </h1>
                            <p className='text-gray-500'>
                            We are commited to helping you transform your life <br /> as part
                            of our commitmentto you.
                            </p>
                            <div className='flex flex-col sm:flex-row items-center gap-5'>
                            <ButtonPrimary
                                type='button'
                                text='Get started'
                                className='w-full'
                            />
                            <ButtonPrimary
                                onClick={onOpenModal}
                                type='button'
                                text='Watch reviews'
                                className='border-2 border-primary bg-transparent hover:bg-transparent w-full'
                            />
                            {/*Modal */}
                            <Modal open={open} onClose={onCloseModal} closeIcon={<CloseIcon />}  center styles={{
                                modal: {
                                maxWidth: '80%',
                                width: '80%',
                                height: '80%',
                                backgroundColor: 'transparent',
                                
                                
                                },
                            }}>
                                <div className="fixed inset-0  border-primary border-2 bg-black/95 rounded-xl  flex items-center justify-center  ">
                                    <div className="bg-red h-auto overflow-auto  p-10">
                                        <h2>Big modal</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quam, temporibus unde reprehenderit praesentium quaerat fuga obcaecati provident repudiandae sed. Officia reprehenderit voluptate animi excepturi blanditiis temporibus sit nobis? Magnam!</p>
                                        <h2>Big modal</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quam, temporibus unde reprehenderit praesentium quaerat fuga obcaecati provident repudiandae sed. Officia reprehenderit voluptate animi excepturi blanditiis temporibus sit nobis? Magnam!</p>
                                        <h2>Big modal</h2>
                                        
                                       
                                    </div>
                                </div>
                            </Modal>

                            </div>
                        </div>
                    </Container>
                </div>
            </section> );
}

export default Hero;
