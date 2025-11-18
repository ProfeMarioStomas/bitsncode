import Icon from '@/components/ui/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faBriefcase,
  faHandshake,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='navbar is-link'>
      <div className='container'>
        <div id='navMenu' className='navbar-menu'>
          <div className='navbar-start'></div>
          <div className='navbar-end'>
            <Link href='/#aboutMe' className='navbar-item'>
              <Icon
                text='Yo'
                icon={<FontAwesomeIcon icon={faUserAstronaut} />}
              />
            </Link>
            <Link href='/#services' className='navbar-item'>
              <Icon
                text='Servicios'
                icon={<FontAwesomeIcon icon={faHandshake} />}
              />
            </Link>
            <Link href='/#portfolio' className='navbar-item'>
              <Icon
                text='Portafolio'
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              />
            </Link>
            <Link href='/#contact' className='navbar-item'>
              <Icon
                text='Contacto'
                icon={<FontAwesomeIcon icon={faAddressBook} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
