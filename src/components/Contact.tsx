import ContactForm from '@/components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Icon from './ui/Icon';

export default function Contact() {
  const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  return (
    <section className='section section-alt' id='contact'>
      <div className='container'>
        <div className='content pt-4 has-text-centered'>
          <button
            className='button is-primary is-rounded is-outlined mb-6'
            style={{ alignSelf: 'center' }}
          >
            <Icon
              text='Contacto'
              icon={<FontAwesomeIcon icon={faAddressBook} />}
            />
          </button>
          <h4 className='title is-3'>
            ¿Algo en lo que necesites apoyo? Escríbeme!
          </h4>
        </div>
        {HCAPTCHA_SITE_KEY ? (
          <ContactForm HCAPTCHA_SITE_KEY={HCAPTCHA_SITE_KEY} />
        ) : (
          <div className='information is-danger is-light'>
            Formulario deshabilitado momentáneamente
          </div>
        )}
      </div>
    </section>
  );
}
