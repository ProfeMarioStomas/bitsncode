'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
import Icon from './ui/Icon';
import { ReactNode, useState } from 'react';

export default function Faq() {
  const [currentFaq, setCurrentFaq] = useState('');

  const Card = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: ReactNode;
  }) => (
    <div className={`${currentFaq === id ? 'card' : 'card mb-1'}`}>
      <header className='card-header'>
        <p className='card-header-title'>{title}</p>
        <button
          onClick={() => setCurrentFaq(id)}
          className='card-header-icon'
          aria-label='more options'
        >
          <Icon
            icon={
              <FontAwesomeIcon
                icon={currentFaq === id ? faChevronUp : faChevronDown}
              />
            }
          />
        </button>
      </header>
      <div className={`card-content ${currentFaq === id ? '' : 'is-hidden'}`}>
        <div className='content'>{children}</div>
      </div>
    </div>
  );

  return (
    <section className='section container' id='faq'>
      <div className='content pt-4 has-text-centered'>
        <div className='columns is-centered'>
          <div className='column is-two-thirds'>
            <button
              className='button is-primary is-rounded is-outlined'
              style={{ alignSelf: 'center' }}
            >
              <Icon
                text='Seguridad y Confianza'
                icon={<FontAwesomeIcon icon={faShield} />}
              />
            </button>
            <h2 className='title is-3'>Preguntas frecuentes</h2>
            <h3 className='title is-6'>
              Todo lo que necesitas saber sobre seguridad de datos, migración
              desde Excel y el proceso de implementación.
            </h3>
          </div>
        </div>
      </div>
      <Card id='1' title='¿Mis datos están seguros en la nube?'>
        <p>
          Construimos sobre infraestructura de alta seguridad. Implementamos
          cifrado <span className='has-text-weight-bold'>AES-256</span> en
          reposo y <span className='has-text-weight-bold'>TLS 1.3</span> en
          tránsito. Diseñamos soluciones preparadas para{' '}
          <span className='has-text-weight-bold'>GDPR</span> y{' '}
          <span className='has-text-weight-bold'>SOC 2</span>, utilizando
          proveedores de nube que cumplen con los más altos estándares
          internacionales (
          <span className='has-text-weight-bold'>ISO 27001</span>). Además,
          facilitamos la soberanía de datos mediante despliegues regionales
          específicos.
        </p>
      </Card>
      <Card id='2' title='¿Cómo migro mis planillas actuales?'>
        <p>
          Nuestro proceso de migración es{' '}
          <span className='has-text-weight-bold'>asistido</span>. Nuestro equipo
          se encarga de mapear tus columnas, limpiar datos duplicados y validar
          la integridad antes de importar. Normalmente migramos miles de
          registros en <span className='has-text-weight-bold'>minutos</span>, no
          semanas.
        </p>
      </Card>
      <Card id='3' title='¿Cuánto tiempo toma implementar mi sistema?'>
        <p>
          Depende de la complejidad, pero la mayoría de nuestros clientes están
          operando con su primer módulo en{' '}
          <span className='has-text-weight-bold'>4-6 semanas</span>. Trabajamos
          con metodología ágil, así que empiezas a ver resultados desde la{' '}
          <span className='has-text-weight-bold'>primera semana</span>.
        </p>
      </Card>
      <Card
        id='4'
        title='¿Puedo integrar el sistema con mis herramientas actuales?'
      >
        <p>
          Diseñamos soluciones bajo un enfoque{' '}
          <span className='has-text-weight-bold'>API-First</span>, facilitando
          la integración nativa con su stack tecnológico actual (ERPs, CRMs o
          sistemas contables). Implementamos{' '}
          <span className='has-text-weight-bold'>Webhooks</span> para eventos en
          tiempo real y garantizamos la interoperabilidad mediante estándares
          abiertos, eliminando las islas de información de forma definitiva.
        </p>
      </Card>
      <Card
        id='5'
        title='¿Qué pasa si necesito una funcionalidad que no existe?'
      >
        <p>
          Somos una software factory: construimos{' '}
          <span className='has-text-weight-bold'>a medida</span>. Si tu proceso
          tiene requerimientos únicos, los desarrollamos como parte de tu
          sistema. No te obligamos a adaptarte a un software genérico.
        </p>
      </Card>
      <Card id='6' title='¿Hay un periodo de prueba o compromiso mínimo?'>
        <p>
          Ofrecemos un periodo piloto de 30 días donde implementamos un módulo
          clave de tu operación. Sin compromiso de permanencia. Si no ves el
          valor, no pagas.
        </p>
      </Card>
    </section>
  );
}
