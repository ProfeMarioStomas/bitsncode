import Image from 'next/image';

type Tech = {
  name: string;
  src: string;
};

type Category = {
  label: string;
  items: Tech[];
};

const categories: Category[] = [
  {
    label: 'Lenguajes',
    items: [
      { name: 'TypeScript', src: '/stack/typescript.svg' },
      { name: 'Java', src: '/stack/java.svg' },
      { name: 'PHP', src: '/stack/php.svg' },
    ],
  },
  {
    label: 'Bases de datos',
    items: [
      { name: 'PostgreSQL', src: '/stack/postgresql.svg' },
      { name: 'MongoDB', src: '/stack/mongodb.svg' },
    ],
  },
  {
    label: 'Infraestructura',
    items: [
      { name: 'Cloudflare', src: '/stack/cloudflare.svg' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className='section py-5'>
      <div className='container'>
        <p
          className='has-text-centered has-text-grey is-size-7 mb-5 has-text-weight-bold is-uppercase'
          style={{ letterSpacing: '0.08em' }}
        >
          Construido con
        </p>
        <div
          className='is-flex is-justify-content-center is-align-items-flex-start is-flex-wrap-wrap'
          style={{ gap: '2rem' }}
        >
          {categories.map((category, index) => (
            <div key={category.label} className='is-flex is-align-items-flex-start' style={{ gap: '2rem' }}>
              {/* Category group */}
              <div>
                <p
                  className='has-text-grey-light is-size-7 has-text-centered mb-3'
                  style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {category.label}
                </p>
                <div className='is-flex is-justify-content-center' style={{ gap: '1.5rem' }}>
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className='is-flex is-flex-direction-column is-align-items-center'
                      style={{ gap: '0.4rem' }}
                    >
                      <div style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={80}
                          height={36}
                          style={{ width: 'auto', height: '36px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.55 }}
                        />
                      </div>
                      <span className='is-size-7 has-text-grey'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Vertical divider between categories (not after last) */}
              {index < categories.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    alignSelf: 'stretch',
                    backgroundColor: 'hsl(0, 0%, 86%)',
                    marginTop: '1.5rem',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
