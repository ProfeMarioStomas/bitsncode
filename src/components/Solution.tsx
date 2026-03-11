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
      <div className='content pt-4 has-text-centered'>
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
            <h3 className='title is-6'>
              Arquitectura moderna, segura y escalable que reemplaza tus
              herramientas fragmentadas por un sistema unificado.
            </h3>
          </div>
        </div>
      </div>
      <div className='columns is-multiline is-equal-height'>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faShield} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Seguridad de grado enterprise</h2>
            </div>

            <p>
              Cifrado end-to-end, autenticación multi-factor y cumplimiento con
              estándares internacionales de protección de datos.
            </p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faDatabase} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Centralización de datos</h2>
            </div>
            <p>
              Una única fuente de verdad para toda tu organización. Sin
              duplicados, sin inconsistencias.
            </p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faBolt} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Velocidad Edge</h2>
            </div>
            <p>
              Desplegado en la red edge global. Respuestas en milisegundos sin
              importar dónde estes.
            </p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faFilter} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Filtros avanzados</h2>
            </div>
            <p>
              Busca y segmenta tus datos con consultas complejas en tiempo real.
            </p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faChartLine} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Reportes automáticos</h2>
            </div>
            <p>
              Genera reportes programados y alertas inteligentes sin intervenir
              manualmente.
            </p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faUsers} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Acceso multiusuario</h2>
            </div>
            <p>Roles y permisos granulares para cada miembro de tu equipo.</p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faUserLock} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Auditoria completa</h2>
            </div>
            <p>
              Log de cada acción, cada cambio, cada acceso. Trazabilidad total.
            </p>
          </div>
        </div>
        <div className='column is-6'>
          <div className='box'>
            <div className='is-flex is-align-items-center mb-1' style={{ gap: 8 }}>
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={faGlobe} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>API abierta</h2>
            </div>
            <p>Integra con tus herramientas actuales via REST o webhooks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
