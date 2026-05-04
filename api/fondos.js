import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Faltan campos' });

  try {
    const r1 = await resend.emails.send({
      from: 'Irina López Web <hola@updates.irinalopez.com>',
      to: process.env.RESEND_TO,
      reply_to: email,
      subject: `📋 Nueva suscripción a Fondos Concursables — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1208;">
          <div style="background: #c8703a; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">Nueva suscripción — Fondos Concursables</h1>
          </div>
          <div style="background: #faf7f2; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e0d4;">
            <p style="margin: 0 0 8px; font-size: 14px; color: #7a6a55; text-transform: uppercase; letter-spacing: 2px;">Nombre</p>
            <p style="margin: 0 0 24px; font-size: 18px; font-weight: bold;">${name}</p>
            <p style="margin: 0 0 8px; font-size: 14px; color: #7a6a55; text-transform: uppercase; letter-spacing: 2px;">Email</p>
            <p style="margin: 0 0 32px; font-size: 18px;">${email}</p>
            <a href="mailto:${email}?subject=Bienvenida al boletín de Fondos Concursables"
               style="display: inline-block; background: #c8703a; color: #fff; padding: 14px 28px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: bold; letter-spacing: 1px;">
              Responderle →
            </a>
          </div>
        </div>
      `,
    });
    console.log('Email a Irina:', JSON.stringify(r1));
  } catch (err) {
    console.error('Error enviando a Irina:', err);
    return res.status(500).json({ error: 'Error al enviar el email' });
  }

  try {
    const r2 = await resend.emails.send({
      from: 'Irina López <hola@updates.irinalopez.com>',
      to: email,
      subject: '¡Ya estás suscrita al boletín de Fondos Concursables! 🎉',
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1208;">
          <div style="background: #c8703a; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">Hola, ${name} 👋</h1>
          </div>
          <div style="background: #faf7f2; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e0d4;">
            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
              ¡Bienvenida! A partir de ahora recibirás cada mes un boletín con las <strong>convocatorias de fondos nacionales e internacionales vigentes</strong> para artistas y proyectos culturales.
            </p>
            <p style="margin: 0 0 32px; font-size: 16px; line-height: 1.6; color: #7a6a55;">
              Si tienes alguna duda o quieres saber más sobre cómo postular a un fondo, responde este email y con gusto te ayudo.
            </p>
            <p style="margin: 0; font-size: 15px;">Un abrazo,<br/><strong>Irina López</strong><br/><span style="color: #7a6a55; font-size: 13px;">Abogada · Gestora Cultural · Licenciada en Música</span></p>
          </div>
        </div>
      `,
    });
    console.log('Email al usuario:', JSON.stringify(r2));
  } catch (err) {
    console.warn('Email de confirmación no enviado:', err?.message);
  }

  return res.status(200).json({ ok: true });
}
