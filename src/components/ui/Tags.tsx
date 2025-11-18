import { Fragment } from 'react';

export type TTagTypes = Array<
  | 'typeScript'
  | 'php'
  | 'fullStack'
  | 'monolite'
  | 'react'
  | 'honojs'
  | 'mysql'
  | 'postgresql'
  | 'cloudflare'
  | 'vps'
  | 'npm'
>;

interface ITagProps {
  types: TTagTypes;
}

export default function Tags({ types }: ITagProps) {
  const renderTypes = {
    typeScript: <span className='tag is-primary is-light'>TypeScript</span>,
    php: <span className='tag is-link is-light'>PHP</span>,
    fullStack: <span className='tag is-danger is-light'>Full-Stack</span>,
    monolite: <span className='tag is-info is-light'>Monolito</span>,
    react: <span className='tag is-info is-light'>React</span>,
    honojs: <span className='tag is-info is-light'>Hono.js</span>,
    mysql: <span className='tag is-success is-light'>MySQL</span>,
    postgresql: <span className='tag is-success is-light'>PostgreSQL</span>,
    cloudflare: <span className='tag is-warning is-light'>CloudFlare</span>,
    vps: <span className='tag is-warning is-light'>VPS</span>,
    npm: <span className='tag is-warning is-light'>NPM</span>,
  };

  return (
    <div className='tags'>
      {types.map((type) => (
        <Fragment key={type}>{renderTypes[type]}</Fragment>
      ))}
    </div>
  );
}
