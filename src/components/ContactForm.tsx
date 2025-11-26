'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, FormEvent, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRouter } from 'next/navigation';

type TFormData = {
  name: string;
  email: string;
  message: string;
};

type TMessage = {
  color: 'is-success' | 'is-danger';
  message: string;
};

type TContactFormProps = {
  HCAPTCHA_SITE_KEY: string;
};

export default function ContactForm({ HCAPTCHA_SITE_KEY }: TContactFormProps) {
  const [formData, setFormData] = useState<TFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const [message, setMessage] = useState<TMessage | null>(null);
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, hcaptchaToken }),
    });

    if (response.status === 200) {
      setMessage({
        color: 'is-success',
        message:
          '<p class="has-text-weight-bold">Mensaje enviado correctamente!</p><p>Nos contactaremos prontamente</p>',
      });
    } else {
      const { message } = (await response.json()) as { message: string };
      setMessage({
        color: 'is-danger',
        message: `<p class="has-text-weight-bold">No logramos registrar el mensaje!</p><p>${message}</p>`,
      });
    }
    router.push(`#contact`);
  };

  return (
    <>
      {message && (
        <div
          className={`notification ${message.color} is-light`}
          dangerouslySetInnerHTML={{ __html: message.message }}
        />
      )}
      <form className='box' onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className='field'>
          <HCaptcha sitekey={HCAPTCHA_SITE_KEY} onVerify={setHcaptchaToken} />
        </div>
        <button
          type='submit'
          className='button is-primary'
          disabled={!hcaptchaToken}
        >
          <span className='icon is-large'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          <span>Enviar</span>
        </button>
      </form>
    </>
  );
}
