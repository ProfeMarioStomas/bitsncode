import { Problem, Solution, Transformation, Contact, Faq } from '@/components';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Icon from '@/components/ui/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBoltLightning,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className='hero is-fullheight-with-navbar'>
        <div className='hero-body' style={{ alignItems: 'stretch' }}>
          <div className='container has-text-centered'>
            <div className='columns is-centered' style={{ height: '100%' }}>
              <div className='column is-two-thirds is-flex is-flex-direction-column is-justify-content-space-between'>
                <button
                  className='button is-primary is-rounded is-outlined'
                  style={{ alignSelf: 'center' }}
                >
                  <Icon
                    text='Software Factory'
                    icon={<FontAwesomeIcon icon={faBoltLightning} />}
                  />
                </button>
                <h2 className='title is-1'>
                  Software profesional para empresas que ya no caben en un Excel
                </h2>
                <h3 className='subtitle is-3'>
                  Sistemas a medida, rápidos y escalables en el Edge. Dejamos
                  atrás las hojas de cálculo para que tu empresa opere con la
                  velocidad y confianza que necesita.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='columns is-centered'>
          <div className='column is-two-thirds'>
            <nav className='level box'>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='title'>5x</p>
                  <p className='heading'>más rápido que procesos manuales</p>
                </div>
              </div>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='title'>99.9%</p>
                  <p className='heading'>uptime garantizado</p>
                </div>
              </div>
              <div className='level-item has-text-centered'>
                <div>
                  <p className='title'>+5</p>
                  <p className='heading'>empresas transformadas</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <Problem />
      <Solution />
      <Transformation />
      <Faq />
      <section className='section container'>
        <div className='box'>
          <div className='columns is-centered'>
            <div className='column is-8'>
              <h2 className='title is-2 has-text-centered'>
                Tu empresa merece operar con software{' '}
                <span className='has-text-success'>
                  a la altura de su ambición
                </span>
              </h2>
              <h4 className='title is-6'>
                Agenda una llamada de 30 minutos. Entienda cómo Bits & Code puede escalar su infraestructura
                antes de tomar una decisión.
              </h4>
              <div className='is-flex is-flex-direction-row is-align-items-center'>
                <button className='button is-success is-rounded mr-3' style={{ display: 'inline'}}>
                  <span className='icon-text'>
                    <span>Agenda una demo gratuita</span>
                    <Icon icon={<FontAwesomeIcon icon={faArrowRight} />} />
                  </span>
                </button>
                <p>
                  Evaluación inicial{' '}
                  <span className='has-text-weight-bold'>sin compromiso</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
