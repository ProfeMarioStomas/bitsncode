import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container content'>
        <div className='columns'>
          <div className='column'>
            <div className='box'>
              <div className='is-flex is-flex-direction-row is-align-items-start mb-3'>
                <Image
                  src='/logo.svg'
                  alt='Bits & Code Logo'
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className='title is-4 has-text-success'>Bits & Code</h3>
                  <p>
                    Nace de la necesidad de elevar el estándar del desarrollo de
                    software. No somos una agencia de marketing que hace sitios
                    web; somos ingenieros que construyen infraestructura
                    crítica.
                  </p>
                </div>
              </div>
              <div className='is-flex is-flex-direction-row is-align-items-center mb-3' style={{ gap: '1rem' }}>
                <Image
                  src='/founder.png'
                  alt='Mario Cares — Fundador Bits & Code'
                  width={64}
                  height={64}
                  style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <p>
                  Liderado por un Ingeniero Informático con +15 años de
                  experiencia y docente universitario en distintas áreas. En{' '}
                  <span className='has-text-weight-bold has-text-success'>
                    Bits & Code
                  </span>{' '}
                  no solo escribimos código; diseñamos activos digitales de alta
                  resiliencia.
                </p>
              </div>
              <h4 className='title is-5'>Otros medios de contacto</h4>
              <div>
                <a className='button is-rounded' href='tel:+56958360950'>
                  <Icon
                    text='+56 9 6836 0950'
                    icon={<FontAwesomeIcon icon={faWhatsapp} />}
                  />
                </a>
              </div>
              <div>
                <a className='button is-rounded' href='mailto:hola@bitsncode.dev'>
                  <Icon
                    text='hola@bitsncode.dev'
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                  />
                </a>
              </div>
              <button className='button is-rounded'>
                <Icon
                  text='Iquique, Chile'
                  icon={<FontAwesomeIcon icon={faMapPin} />}
                />
              </button>
              <div>
                <a
                  className='button is-rounded'
                  href='https://www.linkedin.com/in/mariocaresc/'
                  target='_blank'
                >
                  <Icon
                    text='Conectar con Fundador'
                    icon={<FontAwesomeIcon icon={faLinkedin} />}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='column is-one-third'>
            <div className='box'>
              <h3 className='title is-4'>Sitio</h3>
              <ul>
                <li>
                  <Link href='/privacy'>Política de Privacidad</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
