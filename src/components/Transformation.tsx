'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faExclamation,
  faRocket,
  faShieldDog,
} from '@fortawesome/free-solid-svg-icons';
import Icon from './ui/Icon';
import { useState } from 'react';
import { faCheckCircle, faClock } from '@fortawesome/free-regular-svg-icons';

export default function Transformation() {
  const [activeTab, setActiveTab] = useState('before');

  const BeforeBento = () => {
    return (
      <div className='columns is-equal-height'>
        <div className='column'>
          <div className='box'>
            <button className='button is-rounded'>
              <Icon icon={<FontAwesomeIcon icon={faClock} />} />
            </button>
            <h2 className='title is-6'>TIEMPO DE REPORTE</h2>
            <h4 className='title is-4'>3 días</h4>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <button className='button is-rounded'>
              <Icon icon={<FontAwesomeIcon icon={faExclamation} />} />
            </button>
            <h2 className='title is-6'>ERRORES DE DATOS</h2>
            <h4 className='title is-4'>~12% tasa de error</h4>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <button className='button is-rounded'>
              <Icon icon={<FontAwesomeIcon icon={faArrowTrendUp} />} />
            </button>
            <h2 className='title is-6'>EFICIENCIA OPERATIVA</h2>
            <h4 className='title is-4'>40% del tiempo en tareas manuales</h4>
          </div>
        </div>
      </div>
    );
  };

  const AfterBento = () => {
    return (
      <div className='columns is-equal-height'>
        <div className='column'>
          <div className='box'>
            <button
              className='button is-primary is-rounded is-outlined'
              style={{ alignSelf: 'center' }}
            >
              <Icon icon={<FontAwesomeIcon icon={faRocket} />} />
            </button>
            <h2 className='title is-6'>TIEMPO DE REPORTE</h2>
            <h4 className='title is-4 has-text-success'>3 segundos</h4>
            <span className='tag is-success'>
              <Icon
                text='99.9% más rápido'
                icon={<FontAwesomeIcon icon={faCheckCircle} />}
              />
            </span>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <button
              className='button is-primary is-rounded is-outlined'
              style={{ alignSelf: 'center' }}
            >
              <Icon icon={<FontAwesomeIcon icon={faShieldDog} />} />
            </button>
            <h2 className='title is-6'>ERRORES DE DATOS</h2>
            <h4 className='title is-4 has-text-success'>
              {'< 0.01% tasa de error'}
            </h4>
            <span className='tag is-success'>
              <Icon
                text='Eliminación total'
                icon={<FontAwesomeIcon icon={faCheckCircle} />}
              />
            </span>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <button
              className='button is-primary is-rounded is-outlined'
              style={{ alignSelf: 'center' }}
            >
              <Icon icon={<FontAwesomeIcon icon={faCheckCircle} />} />
            </button>
            <h2 className='title is-6'>EFICIENCIA OPERATIVA</h2>
            <h4 className='title is-4 has-text-success'>
              Automatización del 95%
            </h4>
            <span className='tag is-success'>
              <Icon
                text='+300% productividad'
                icon={<FontAwesomeIcon icon={faCheckCircle} />}
              />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className='section container' id='transformation'>
      <div className='content pt-6 has-text-centered'>
        <div className='columns is-centered'>
          <div className='column is-two-thirds'>
            <button
              className='button is-primary is-rounded is-outlined'
              style={{ alignSelf: 'center' }}
            >
              <Icon
                text='Transformación'
                icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
              />
            </button>
            <h2 className='title is-3'>
              Antes vs. Después: el impacto es medible
            </h2>
            <h4 className='title is-6'>
              Mira como cambia la operación de tu empresa cuando reemplazas
              procesos manuales con software profesional.
            </h4>
          </div>
        </div>
        <div className='tabs is-toggle is-centered'>
          <ul>
            <li className={activeTab === 'before' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('before')}>Antes</a>
            </li>
            <li className={activeTab === 'after' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('after')}>Después</a>
            </li>
          </ul>
        </div>
        {activeTab === 'before' ? <BeforeBento /> : <AfterBento />}
        <div className='box'>
          En base a datos extraídos desde nuestros clientes
        </div>
      </div>
      <div className='columns is-equal-height'>
        <div className='column'>
          <div className='box'>
            <h2 className='title is-5 has-text-centered'>Proceso manual típico</h2>
            <p className='pb-1'><span className='tag'>1</span> Exportar datos de distintos sistemas</p>
            <p className='pb-1'><span className='tag'>2</span> Consolidar en una hoja de cálculo</p>
            <p className='pb-1'><span className='tag'>3</span> Verificar inconsistencias manualmente</p>
            <p className='pb-1'><span className='tag'>4</span> Crear gráficos y tablas</p>
            <p className='pb-1'><span className='tag'>5</span> Enviar por email para aprobación</p>
            <p className='pb-1'><span className='tag'>6</span> Esperar respuesta y corregir</p>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <h2 className='title is-5 has-text-centered has-text-success'>Con Bits & Code</h2>
            <p className='pb-1'><span className='tag is-success'>1</span> Abrir el dashboard</p>
            <p className='pb-1'><span className='tag is-success'>2</span> Seleccionar el reporte deseado</p>
            <p className='pb-1'><span className='tag is-success'>3</span> Descargar o compartir en un click</p>
            <div className='has-background-white-ter p-3 mt-3' style={{ border: "1px solid hsl(0, 0%, 71%)"}}>
              Tiempo total estimado: <span className='has-text-success has-text-weight-bold'>3 segundos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
