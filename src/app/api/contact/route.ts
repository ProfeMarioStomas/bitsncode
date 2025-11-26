import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const TO_EMAIL = 'contacto@bitsncode.dev';
const FROM_EMAIL = 'hola@bitsncode.dev';

async function verifyHcaptcha(token: string) {
  const HCAPTCHA_SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY;

  const url = `https://hcaptcha.com/siteverify`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    body: `response=${token}&secret=${HCAPTCHA_SECRET_KEY}`,
  });
  const data = (await response.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name: string;
    email: string;
    message: string;
    hcaptchaToken: string;
  };

  const { name, email, message, hcaptchaToken } = body;

  if (!hcaptchaToken) {
    return NextResponse.json(
      { message: 'Error: Falta el token de hCaptcha.' },
      { status: 400 },
    );
  }

  if (!(await verifyHcaptcha(hcaptchaToken))) {
    return NextResponse.json(
      { message: 'Verificación de robot fallida.' },
      { status: 403 },
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Faltan campos requeridos' },
      { status: 400 },
    );
  }

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const resend = new Resend(RESEND_API_KEY);
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: 'Formulario Contacto Web',
      html: `
        <p>Correo: ${email}</p>
        <p>Nombre: ${name}</p>
        <p>Cuerpo:</p>
        <p>${message}</p>
        `,
    });

    if (response.error) {
      return NextResponse.json(
        {
          message: 'Error al enviar formulario.',
          error: response.error.message,
        },
        { status: 500 },
      );
    } else {
      return NextResponse.json({ message: 'Enviado' }, { status: 200 });
    }
  } catch (error) {
    console.error('Error on resend: ', error);
    let errorMessage = 'Error al enviar el formulario';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { message: 'Error al enviar formulario.', error: errorMessage },
      { status: 500 },
    );
  }
}
