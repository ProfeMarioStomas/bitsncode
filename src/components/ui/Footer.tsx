import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          Hecho en Chile 🇨🇱 | © {new Date().getFullYear()} |{' '}
          <span className='has-text-weight-bold'>Bits & Code</span> 🚀
        </p>
        <Link href='https://bulma.io' target='_blank'>
          <Image
            src='https://bulma.io/assets/images/made-with-bulma.png'
            alt='Made with Bulma'
            width={128}
            height={24}
          />
        </Link>
      </div>
    </footer>
  );
}
