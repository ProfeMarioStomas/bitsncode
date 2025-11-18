import { AboutMe, Services, Portfolio, Contact } from '@/components';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className='hero is-link is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container'>
            <h2 className='title is-1'>Mario Cares</h2>
            <h1 className='subtitle is-3'>
              Programador Freelance y Profesor en TypeScript y Java
            </h1>
          </div>
        </div>
      </section>
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
