import Link from 'next/link';

export default function Privacy() {
  return (
    <section className='section container content'>
      <h1 className='title is-1'>Política de Privacidad</h1>
      <h2 className='subtitle'>Última actualización: 23 de febrero de 2026</h2>
      <p>
        En <span className='has-text-weight-bold'>Bits & Code</span>, la
        privacidad y la seguridad de la información son pilares fundamentales de
        nuestra arquitectura de software. Este documento detalla cómo tratamos
        los datos personales de acuerdo con el Reglamento General de Protección
        de Datos (<span className='has-text-weight-bold'>GDPR</span>) y las
        mejores prácticas de la industria.
      </p>
      <h2 className='title is-2'>1. Responsable del Tratamiento</h2>
      <p>
        El responsable del tratamiento de sus datos es{' '}
        <span className='has-text-weight-bold'>Bits & Code</span>, con domicilio
        en Chile y contacto directo a través de los canales establecidos en
        nuestro sitio web{' '}
        <Link href='https://bitsncode.dev'>https://bitsncode.dev</Link>.
      </p>
      <h2 className='title is-2'>2. Datos que Recopilamos</h2>
      <p>
        Solo recopilamos la información estrictamente necesaria para gestionar
        sus consultas técnicas:
      </p>
      <ul>
        <li>
          <span className='has-text-weight-bold'>Datos de contacto:</span>{' '}
          Nombre, dirección de correo electrónico y empresa.
        </li>
        <li>
          <span className='has-text-weight-bold'>Datos de navegación:</span>{' '}
          Dirección IP, tipo de navegador y datos de interacción (recopilados de
          forma anónima para fines estadísticos).
        </li>
      </ul>
      <h2 className='title is-2'>3. Finalidad y Base Legal</h2>
      <p>
        Tratamos sus datos bajo la base legal del{' '}
        <span className='has-text-weight-bold'>consentimiento</span> y el{' '}
        <span className='has-text-weight-bold'>interés legítimo</span> para:
      </p>
      <ul>
        <li>Responder a solicitudes de diagnóstico técnico.</li>
        <li>
          Garantizar la seguridad del sitio mediante la prevención de spam y
          ataques.
        </li>
      </ul>
      <h2 className='title is-2'>
        4. Proveedores de Servicios (Subprocesadores)
      </h2>
      <p>
        Para operar con estándares de grado industrial, utilizamos los
        siguientes proveedores:
      </p>
      <ul>
        <li>
          <span className='has-text-weight-bold'>
            hCaptcha (Intuition Machines, Inc.):
          </span>{' '}
          Para la prevención de spam. Analiza características del dispositivo y
          comportamiento para distinguir humanos de bots.
        </li>
        <li>
          <span className='has-text-weight-bold'>Resend:</span> Para el envío y
          gestión de correos electrónicos de contacto.
        </li>
        <li>
          <span className='has-text-weight-bold'>Cloudflare:</span> Para la
          entrega de contenido y seguridad perimetral (WAF).
        </li>
      </ul>
      <h2 className='title is-2'>5. Derechos del Usuario (GDPR)</h2>
      <p>Como interesado, usted tiene derecho a:</p>
      <ul>
        <li>
          <span className='has-text-weight-bold'>Acceso:</span> Solicitar qué
          datos tenemos sobre usted.
        </li>
        <li>
          <span className='has-text-weight-bold'>Rectificación:</span> Corregir
          datos inexactos.
        </li>
        <li>
          <span className='has-text-weight-bold'>
            Supresión (Derecho al olvido):
          </span>{' '}
          Solicitar la eliminación de sus datos.
        </li>
        <li>
          <span className='has-text-weight-bold'>Portabilidad:</span> Recibir
          sus datos en un formato estructurado.
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, envíe un correo electrónico a través de
        nuestro formulario de contacto.
      </p>
      <h2 className='title is-2'>6. Seguridad</h2>
      <p>
        Implementamos medidas técnicas y organizativas de vanguardia, incluyendo
        cifrado{" "}
        <span className='has-text-weight-bold'>AES-256</span> en reposo y
        protocolos{" "}
        <span className='has-text-weight-bold'>TLS 1.3</span> en tránsito,
        asegurando que su información nunca sea expuesta a terceros no
        autorizados.
      </p>
      <h2 className='title is-2'>7. Cambios en esta Política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta política para reflejar
        cambios en nuestras prácticas operativas o requisitos legales.
      </p>
    </section>
  );
}
