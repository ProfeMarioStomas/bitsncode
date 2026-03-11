'use client';

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
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='navbar is-fixed-top has-shadow'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <Image
              src='logo.svg'
              alt='Bits & Code logo'
              width={60}
              height={60}
              style={{ maxHeight: 'none' }}
              loading='eager'
            />
            <h2 className='title is-2'>Bits & Code</h2>
          </div>
          <a
            role='button'
            className={`navbar-burger${isMenuOpen ? ' is-active' : ''}`}
            aria-label='menu'
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div
          id='navMenu'
          className={`navbar-menu${isMenuOpen ? ' is-active' : ''}`}
        >
          <div className='navbar-start'>
            <Link
              href='/#problem'
              className='navbar-item'
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon
                text='Problema'
                icon={<FontAwesomeIcon icon={faCircleExclamation} />}
              />
            </Link>
            <Link
              href='/#solution'
              className='navbar-item'
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon
                text='Solución'
                icon={<FontAwesomeIcon icon={faPeopleArrows} />}
              />
            </Link>
            <Link
              href='/#transformation'
              className='navbar-item'
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon
                text='Transformación'
                icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
              />
            </Link>
            <Link
              href='/#faq'
              className='navbar-item'
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon
                text='FAQ'
                icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              />
            </Link>
          </div>
          <div className='navbar-end'>
            <p className='navbar-item'>
              <Link
                href='/#contact'
                className='button is-success'
                onClick={() => setIsMenuOpen(false)}
              >
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
