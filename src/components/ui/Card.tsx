import { Fragment, ReactNode } from 'react';
import Tags, { TTagTypes } from '@/components/ui/Tags';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

interface ICardProps {
  title: string;
  children: ReactNode;
  tags: TTagTypes;
  github?: Array<{ type: string; url: string }>;
  npm?: string;
}

export default function Card({
  title,
  children,
  tags,
  github,
  npm,
}: ICardProps) {
  return (
    <div className='card'>
      <header className='card-header'>
        <div className='card-header-title is-align-items-start'>
          <span className='pr-2'>{title}</span>
          <Tags types={tags} />
        </div>
      </header>
      <div className='card-content'>
        <div className='content'>{children}</div>
      </div>
      <footer className='card-footer'>
        {github && (
          <div className='dropdown is-hoverable'>
            <div className='dropdown-trigger'>
              <button
                className='button'
                aria-haspopup='true'
                aria-controls='dropdown-menu4'
              >
                <span>Ver código en GitHub</span>
                <span className='icon is-small'>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </div>
            <div className='dropdown-menu' id='dropdown-menu4' role='menu'>
              <div className='dropdown-content'>
                {github.map((item: { type: string; url: string }) => (
                  <Fragment key={item.type}>
                    <Link
                      className='dropdown-item'
                      href={item.url}
                      target='_blank'
                    >
                      {item.type}
                    </Link>
                    <hr className='dropdown-divider' />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
        {npm && (
          <Link href={npm} target='_blank' className='card-footer-item'>
            <Icon text={'Ver en NPM'} icon={<FontAwesomeIcon icon={faNpm} />} />
          </Link>
        )}
      </footer>
    </div>
  );
}
