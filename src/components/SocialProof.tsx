import Image from 'next/image';

type Client = {
  src: string;
  name: string;
};

const clients: Client[] = [
  { name: 'Kaiho Maquinarias', src: '/clients/logo-kaiho.png' },
  { name: 'Nuvisa Food', src: '/clients/nuvisa-logo.png' },
  { name: 'Arroco Multiservicios', src: '/clients/arroco-multiservicios-logo.png' },
];

export default function SocialProof() {
  if (clients.length === 0) {
    return null;
  }

  return (
    <section className='section py-4'>
      <div className='container'>
        <p className='has-text-centered has-text-grey is-size-7 mb-4 has-text-weight-bold is-uppercase' style={{ letterSpacing: '0.08em' }}>
          Empresas que confían en nosotros
        </p>
        <div
          className='is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap'
          style={{ gap: '2.5rem' }}
        >
          {clients.map((client) => (
            <Image
              key={client.src}
              src={client.src}
              alt={client.name}
              width={120}
              height={48}
              style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.6 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
