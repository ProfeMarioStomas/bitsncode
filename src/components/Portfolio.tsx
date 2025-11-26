import Card from '@/components/ui/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  return (
    <section className='section' id='portfolio'>
      <div className='container'>
        <nav className='level'>
          <div className='level-left'>
            <h3 className='title is-2'>Portafolio</h3>
          </div>
          <div className='level-right'>
            <h3 className='title is-2'>
              <FontAwesomeIcon icon={faBriefcase} />
            </h3>
          </div>
        </nav>
        <h4 className='subtitle is-5'>
          Los últimos trabajos que hemos realizado
        </h4>
        <div className='columns'>
          <div className='column is-4 content'>
            <Card
              title='Legionarios'
              tags={['typeScript', 'fullStack', 'postgresql', 'cloudflare']}
              github={[
                {
                  type: 'FrontEnd',
                  url: 'https://github.com/ProfeMarioStomas/legionarios-cuotas-front',
                },
                {
                  type: 'BackEnd',
                  url: 'https://github.com/ProfeMarioStomas/legionarios-cuotas-back',
                },
              ]}
            >
              <span className='has-text-weight-bold'>
                Aplicación de Gestión Financiera y Membresías
              </span>{' '}
              desarrollada a medida para un club privado. Permite la{' '}
              <span className='has-text-weight-bold'>
                administración centralizada
              </span>{' '}
              del registro de miembros y el seguimiento detallado del estado de{' '}
              sus{' '}
              <span className='has-text-weight-bold'>
                cuotas, pagos y morosidad
              </span>
            </Card>
          </div>
          <div className='column is-4'>
            <Card
              title='Bura'
              tags={['typeScript', 'npm']}
              npm='https://www.npmjs.com/package/bura'
            >
              <span className='has-text-weight-bold'>Librería React</span> para
              utilizar los componentes de{' '}
              <Link href='https://bulma.io' target='_blank'>
                Bulma CSS
              </Link>{' '}
              de manera rápida y simple, sin tener que reescribir código.
            </Card>
          </div>
          <div className='column is-4'>
            <Card title='VentArio' tags={['php', 'monolite', 'mysql', 'vps']}>
              <span className='has-text-weight-bold'>
                Sistema Integrado de Punto de Venta (POS) y Gestión de
                Inventario.
              </span>{' '}
              Desarrollado para automatizar la operación diaria, el sistema
              registra ventas en tiempo real, actualiza los niveles de stock y
              previene quiebres. Genera{' '}
              <span className='has-text-weight-bold'>
                reportes financieros detallados
              </span>{' '}
              y métricas de inventario, permitiendo la toma de desiciones
              informadas.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
