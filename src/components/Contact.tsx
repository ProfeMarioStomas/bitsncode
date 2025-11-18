import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {
  faAddressBook,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
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
      <form className='box'>
        <div className='field'>
          <label htmlFor='name' className='label'>
            Nombre
          </label>
          <div className='control has-icons-left has-icons-right'>
            <input
              className='input'
              type='text'
              name='name'
              id='name'
              placeholder='Juan Pérez'
            />
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>
        <div className='field'>
          <label htmlFor='email' className='label'>
            e-Mail
          </label>
          <div className='control has-icons-left has-icons-right'>
            <input
              className='input'
              type='email'
              name='email'
              id='email'
              placeholder='juan.perez@casilla.com'
            />
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>
        <div className='field'>
          <label htmlFor='message' className='label'>
            Mensaje
          </label>
          <div className='control'>
            <textarea
              name='message'
              id='message'
              cols={30}
              rows={5}
              className='textarea'
              placeholder='No quiero seguir dependiendo de un archivo excel'
            ></textarea>
          </div>
        </div>
        <button type='button' className='button is-primary'>
          <span className='icon is-large'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          <span>Enviar</span>
        </button>
      </form>
    </section>
  );
}
