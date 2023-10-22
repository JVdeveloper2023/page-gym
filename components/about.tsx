import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "./ui/button-primary";
import Title from "./ui/title";

const About = () => {
    return (  
    
        <section 
        id="about"
        className="min-h-screen flex items-center justify-center overflow-hidden">
            <Container>
                <Title title="Why Join With" titlePrimary="Us?"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="flex flex-col items-center gap-20">
                        <ul className="marker:text-primary list-outside list-disc font-sans font-medium space-y-5 text-xl pt-10">
                            <li>
                                <p>Best Gym</p>
                            </li>
                            <li>
                                <p>Experts Coach</p>
                            </li>
                            <li>
                                <p>Flexible Workout Time</p>
                            </li>
                            <li>
                                <p>Good Workout Facilities</p>
                            </li>
                            <li>
                                <p>Consultation With Experst</p>
                            </li>
                        </ul>

                        <div className="flex flex-col  items-center w-full">
                        <ButtonPrimary type="submit" text="See More Benefits"/>
                        </div>
                        </div>
                        
                    
                        <div className="relative ">
                            <div className='aboslute left-0 top-0 xl:-translate-y-8 xl:translate-x-5 2xl:-translate-y-10 2xl:translate-x-14'>
                                <Image
                                src='/images/trainer-1.png'
                                alt='Trainer'
                                fill
                                className='object-cover rounded-xl shadow-xl  lg:w-[184px] lg:h-[230px] 2xl:w-[204px] 2xl:h-[250px] '
                                
                                />
                            </div>
                            <div className='md:aboslute left-0 top-0 lg:translate-x-52 lg:-translate-y-20 xl:translate-x-60 xl:-translate-y-20 2xl:translate-x-2/4 2xl:-translate-y-20'>
                                <Image
                                src='/images/trainer-2.png'
                                alt='Trainer'
                                fill
                                className='object-cover rounded-xl shadow-xl  lg:w-[184px] lg:h-[130px] 2xl:w-[204px] 2xl:h-[150px] '
                                
                                />
                            </div>
                            <div className='md:aboslute left-0 top-0 lg:translate-y-64 lg:translate-x-10 xl:translate-y-60 xl:translate-x-16 2xl:translate-y-60 2xl:translate-x-28'>
                                <Image
                                src='/images/trainer-3.png'
                                alt='Trainer'
                                fill
                                className='object-cover rounded-xl shadow-xl  lg:w-[184px] lg:h-[130px] 2xl:w-[204px] 2xl:h-[150px] '
                                
                                />
                            </div>
                            <div className='md:aboslute left-0 top-0 lg:translate-y-20 lg:translate-x-64 xl:translate-y-24 xl:translate-x-72 2xl:translate-y-28 2xl:translate-x-[350px] '>
                                <Image
                                src='/images/trainer-4.png'
                                alt='Trainer'
                                fill
                                className='object-cover rounded-xl shadow-xl  lg:w-[184px] lg:h-[230px] 2xl:w-[204px] 2xl:h-[250px] '
                                
                                />
                            </div>
                        </div>
                </div>
                
            </Container>
        </section> );
}
 
export default About;