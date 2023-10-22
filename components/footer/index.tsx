import Container from "../shared/container";
import Logo from "../shared/logo";
import Tag from "../ui/tag";
import SectionContact from "./components/section-contacts";
import Social from "./components/section-social";

const Footer = () => {
    return ( 
        <footer id="contact" className="bg-gray-ligth/20 py-10">
            <Container className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <Logo/>
                <SectionContact title="Company" list={['fafdasf','fasdfsdfs','fasdfsdaf']}/>
                <SectionContact title="Company" list={['fafdasf','fasdfsdfs','fasdfsdaf']}/>
                <section className="flex flex-col gap-5">
                        <h5 className="font-medium text-xl">Social</h5>
                        <Social/>
                </section>
                <section className="flex flex-col gap-5">
                    <h5 className="font-medium text-xl">Popular Tags</h5>
                    <div className="flex flex-row flex-wrap gap-2">
                        <Tag text="Tag 1"/>
                        <Tag text="Tag 2" active/>
                        <Tag text="Tag 3"/>
                        <Tag text="Tag 4"/>
                        <Tag text="Tag 5"/>
                        <Tag text="Tag 6"/>
                    </div>
                </section>
            </Container>
            <div className="p-5 text-white text-center bg-radial-primary mt-10">
                 <h5>&copy; J-Dev All Rights Reserved</h5>
            </div>
        </footer>
     );
}
 
export default Footer;