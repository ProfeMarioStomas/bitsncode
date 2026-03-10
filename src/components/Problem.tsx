import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faExclamationTriangle,
  faEyeSlash,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '@/components/ui/Icon';

export default function Problem() {
  return (
    <section className='section section-alt' id='problem'>
      <div className='container'>
        <div className='content pt-4 has-text-centered'>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <button
                className='button is-primary is-rounded is-outlined'
                style={{ alignSelf: 'center' }}
              >
                <Icon
                  text='El Problema'
                  icon={<FontAwesomeIcon icon={faCircleExclamation} />}
                />
              </button>
              <h2 className='title is-3'>
                Tu crecimiento está limitado por herramientas que no escalan
              </h2>
              <h3 className='title is-6'>
                Las hojas de cálculo y herramientas legacy funcionaron al inicio,
                pero ahora son el cuello de botella de tu crecimiento.
              </h3>
            </div>
          </div>
        </div>
        <div className='columns content is-equal-height pt-2'>
          <div className='column animate-on-scroll'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faLayerGroup} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Islas de datos</h2>
              <p>
                Tu equipo trabaja con 15 archivos distintos que nunca están
                sincronizados. Cada departamento tiene{' '}
                <span className='is-italic has-text-weight-bold'>su</span> propia
                versión de la verdad, y las decisiones se toman con datos
                incompletos o desactualizados.
              </p>
              <blockquote className='is-italic'>
                CRM por un lado, inventario en un Excel, finanzas en otro. Sin
                conexión entre ellos.
              </blockquote>
            </div>
          </div>
          <div className='column animate-on-scroll'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  style={{ height: 'auto' }}
                />
              </span>
              <h2 className='title is-4'>Errores manuales</h2>
              <p>
                Copiar y pegar datos entre hojas de cálculo introduce errores
                invisibles que se acumulan. Un dato mal ingresado puede generar
                decisiones millonarias equivocadas.{' '}
                <a
                  href='https://www.biobiochile.cl/noticias/economia/actualidad-economica/2023/09/02/error-en-la-planilla-excel-gobierno-corrige-cifra-erronea-y-confirma-alza-de-8-en-cuentas-de-luz.shtml'
                  target='_blank'
                >
                  [Chile, 2023]
                </a>
              </p>
              <blockquote className='is-italic'>
                El 88% de las hojas de cálculo corporativas contienen errores
                significativos.{' '}
                <a
                  href='https://www.researchgate.net/publication/228662532_What_We_Know_About_Spreadsheet_Errors/link/53eb1f7a0cf2fb1b9b6adbef/download'
                  target='_blank'
                >
                  [Panko, 2008]
                </a>
              </blockquote>
            </div>
          </div>
          <div className='column animate-on-scroll'>
            <div className='box'>
              <span className='icon is-large has-text-success bordered-icon-success mb-3'>
                <FontAwesomeIcon icon={faEyeSlash} style={{ height: 'auto' }} />
              </span>
              <h2 className='title is-4'>Falta de visibilidad en tiempo real</h2>
              <p>
                Cuando necesitas un reporte actualizado, alguien tiene que
                consolidar datos manualmente. Para cuando está listo, la
                información ya está desactualizada.
              </p>
              <blockquote className='is-italic'>
                Tomar decisiones con datos de hace una semana no es operar en
                tiempo real.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
