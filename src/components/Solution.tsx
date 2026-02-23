import {
  faBolt,
  faChartLine,
  faDatabase,
  faFilter,
  faGlobe,
  faPeopleArrows,
  faShield,
  faUserLock,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from './ui/Icon';

export default function Solution() {
  return (
    <section className='section container' id='solution'>
      <div className='content pt-6 has-text-centered'>
        <div className='columns is-centered'>
          <div className='column is-two-thirds'>
            <button
              className='button is-primary is-rounded is-outlined'
              style={{ alignSelf: 'center' }}
            >
              <Icon
                text='Solución'
                icon={<FontAwesomeIcon icon={faPeopleArrows} />}
              />
            </button>
            <h2 className='title is-3'>
              Un motor central para toda tu operación
            </h2>
            <h4 className='title is-6'>
              Arquitectura moderna, segura y escalable que reemplaza tus
              herramientas fragmentadas por un sistema unificado.
            </h4>
          </div>
        </div>
      </div>
      <div className='fixed-grid has-4-cols'>
        <div className='grid'>
          <div className='cell is-col-span-2 is-row-span-2 is-flex is-flex-direction-column'>
            <div className='box content' style={{ flex: 1, width: '100%' }}>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faShield} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Seguridad de grado enterprise</h2>
              <p>
                Cifrado end-to-end, autenticación multi-factor y cumplimiento
                con estándares internacionales de protección de datos.
              </p>
              <p>
                Desarrollamos siguiendo los marcos de trabajo de{' '}
                <span className='tag is-medium'>SOC-2</span>,{' '}
                <span className='tag is-medium'>ISO 27001</span> y{' '}
                <span className='tag is-medium'>GDPR</span>, garantizando que
                una infraestructura escalable, segura y fácil de certificar en
                el futuro.
              </p>
            </div>
          </div>
          <div className='cell is-flex'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faDatabase} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Centralización de datos</h2>
              <p>
                Una única fuente de verdad para toda tu organización. Sin
                duplicados, sin inconsistencias.
              </p>
            </div>
          </div>
          <div className='cell is-flex'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faBolt} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Velocidad Edge</h2>
              <p>
                Desplegado en la red edge global. Respuestas en milisegundos sin
                importar dónde estes.
              </p>
            </div>
          </div>
          <div className='cell is-flex'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faFilter} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Filtros avanzados</h2>
              <p>
                Busca y segmenta tus datos con consultas complejas en tiempo
                real.
              </p>
            </div>
          </div>
          <div className='cell'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon
                  icon={faChartLine}
                  style={{ height: 'auto' }}
                />
              </span>
              <h2 className='title is-4'>Reportes automáticos</h2>
              <p>
                Genera reportes programados y alertas inteligentes sin
                intervenir manualmente.
              </p>
            </div>
          </div>
          <div className='cell'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faUsers} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Acceso multiusuario</h2>
              <p>Roles y permisos granulares para cada miembro de tu equipo.</p>
            </div>
          </div>
          <div className='cell'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faUserLock} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Auditoria completa</h2>
              <p>
                Log de cada acción, cada cambio, cada acceso. Trazabilidad
                total.
              </p>
            </div>
          </div>
          <div className='cell is-col-span-2 is-flex'>
            <div className='box' style={{ width: '100%' }}>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faGlobe} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>API abierta</h2>
              <p>Integra con tus herramientas actuales via REST o webhooks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
