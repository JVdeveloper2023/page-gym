import Container from "./shared/container";
import Service from "./ui/service";
import Title from "./ui/title";

const Services = () => {
    return (
        <section 
        id="services"
        className="min-h-screen flex items-center justify-center">
            <Container>
        <Title title='Fitness Plans &' titlePrimary='Nutritions' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
          <Service
            image='/icons/icon-1.png'
            title='Weight Loss'
            description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.'
          />
          <Service
            image='/icons/yoga.png'
            title='Classic Yoga'
            description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.'
          />
          <Service
            image='/icons/cycling.png'
            title='Cycling'
            description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.'
          />
          <Service
            image='/icons/body.png'
            title='Body Building'
            description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.'
          />
          <Service
            image='/icons/musculation.png'
            title='Musculation'
            description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.'
          />
          <Service
            image='/icons/running.png'
            title='Fitness Running'
            description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.'
          />
        </div>
      </Container>
        </section>
         );
}
 
export default Services;