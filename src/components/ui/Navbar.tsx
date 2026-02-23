import Icon from '@/components/ui/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faCircleExclamation,
  faPeopleArrows,
  faCircleQuestion,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='navbar is-fixed-top has-shadow'>
      <div className='container'>
        <div id='navMenu' className='navbar-menu'>
          <div className='navbar-brand'>
            <div className='navbar-item'>
              <Image
                src='logo.svg'
                alt='Bits & Code logo'
                width={60}
                height={60}
                style={{ maxHeight: 'none' }}
              />
              <h1 className='title is-2'>Bits & Code</h1>
            </div>
            <a
              role='button'
              className='navbar-burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div className='navbar-start'>
            <Link href='/#problem' className='navbar-item'>
              <Icon
                text='Problema'
                icon={<FontAwesomeIcon icon={faCircleExclamation} />}
              />
            </Link>
            <Link href='/#solution' className='navbar-item'>
              <Icon
                text='Solución'
                icon={<FontAwesomeIcon icon={faPeopleArrows} />}
              />
            </Link>
            <Link href='/#transformation' className='navbar-item'>
              <Icon
                text='Transformación'
                icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
              />
            </Link>
            <Link href='/#faq' className='navbar-item'>
              <Icon
                text='FAQ'
                icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              />
            </Link>
          </div>
          <div className='navbar-end'>
            <p className='navbar-item'>
              <Link href='/#contact' className='button is-success'>
                <Icon
                  text='Contacto'
                  icon={<FontAwesomeIcon icon={faAddressBook} />}
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
