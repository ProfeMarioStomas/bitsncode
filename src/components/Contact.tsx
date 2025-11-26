import ContactForm from '@/components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  return (
    <section className='section' id='contact'>
      <nav className='level'>
        <div className='level-left'>
          <h3 className='title is-2'>Contacto</h3>
        </div>
        <div className='level-right'>
          <h3 className='title is-2'>
            <FontAwesomeIcon icon={faAddressBook} />
          </h3>
        </div>
      </nav>
      <h4 className='subtitle is-5'>
        ¿Algo en lo que necesites apoyo? Escríbeme!
      </h4>
      {HCAPTCHA_SITE_KEY ? (
        <ContactForm HCAPTCHA_SITE_KEY={HCAPTCHA_SITE_KEY} />
      ) : (
        <div className='information is-danger is-light'>
          Formulario deshabilitado momentáneamente
        </div>
      )}
    </section>
  );
}
