import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className='section' id='aboutMe'>
      <div className='container content'>
        <nav className='level'>
          <div className='level-left'>
            <h3 className='title is-2'>Sobre Mi</h3>
          </div>
          <div className='level-right'>
            <h3 className='title is-2'>
              <FontAwesomeIcon icon={faUserAstronaut} />
            </h3>
          </div>
        </nav>
        <div className='columns'>
          <div className='column is-3'>
            <figure className='image is-square'>
              <Image
                src='/aboutMe.png'
                alt='ia generated avatar'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='is-rounded'
                priority
              />
            </figure>
          </div>
          <div className='column'>
            <h4 className='subtitle is-5'>
              Fundador de Bits & Code, una consultora de software boutique.
            </h4>
            <p>
              Con{' '}
              <span className='has-text-weight-bold'>
                más de 15 años de experiencia
              </span>
              , mi enfoque es la{' '}
              <span className='has-text-weight-bold'>
                solución a problemas complejos
              </span>{' '}
              y la construcción de sistemas robustos.
            </p>
            <ul>
              <li>
                <span className='has-text-weight-bold'>
                  Experiencia Técnica:
                </span>{' '}
                Domino las arquitecturas modernas con{' '}
                <span className='has-text-weight-bold'>TypeScript</span> para
                soluciones full-stack flexibles y{' '}
                <span className='has-text-weight-bold'>Java</span> para sistemas
                empresariales de alto rendimiento.
              </li>
              <li>
                <span className='has-text-weight-bold'>
                  Rigor Metodológico:
                </span>{' '}
                Mi rol como{' '}
                <span className='has-text-weight-bold'>profesor</span>{' '}
                universitario de programación asegura que cada proyecto se
                desarrolla aplicando rigurosamente{' '}
                <span className='has-text-weight-bold'>
                  buenas prácticas de programación
                </span>
                , garantizando así la{' '}
                <span className='has-text-weight-bold'>mantenibilidad</span> del
                código a largo plazo.
              </li>
            </ul>
            <p>
              Vivo en Chile 🇨🇱 y mis servicios de desarrollo y consultoría están
              disponibles para clientes en todo el mundo.
            </p>
            <div className='notification is-success is-light is-flex is-align-items-center is-gap-3'>
              ¿Listo para construir su próximo sistema escalable?{' '}
              <Link href='/#contact' className='button is-primary'>
                <Icon
                  text='Ir a Contacto'
                  icon={<FontAwesomeIcon icon={faRocket} />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
