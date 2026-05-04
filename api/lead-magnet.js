import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Faltan campos' });

  try {
    await resend.batch.send([
      // Email a Irina
      {
        from: 'Irina López Web <onboarding@resend.dev>',
        to: process.env.RESEND_TO,
        reply_to: email,
        subject: `📥 Nueva descarga de guía — ${name}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1208;">
            <div style="background: #c8703a; padding: 32px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">
                Nueva descarga de la guía gratuita
              </h1>
            </div>
            <div style="background: #faf7f2; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e0d4;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #7a6a55; text-transform: uppercase; letter-spacing: 2px;">Nombre</p>
              <p style="margin: 0 0 24px; font-size: 18px; font-weight: bold;">${name}</p>
              <p style="margin: 0 0 8px; font-size: 14px; color: #7a6a55; text-transform: uppercase; letter-spacing: 2px;">Email</p>
              <p style="margin: 0 0 32px; font-size: 18px;">${email}</p>
              <a href="mailto:${email}?subject=Tu guía para formalizar tu carrera artística"
                 style="display: inline-block; background: #c8703a; color: #fff; padding: 14px 28px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: bold; letter-spacing: 1px;">
                Responderle →
              </a>
            </div>
          </div>
        `,
      },
      // Email de confirmación al usuario
      {
        from: 'Irina López <onboarding@resend.dev>',
        to: email,
        subject: '¡Tu guía está en camino! 🎉',
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1208;">
            <div style="background: #c8703a; padding: 32px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">
                Hola, ${name} 👋
              </h1>
            </div>
            <div style="background: #faf7f2; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e0d4;">
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
                Recibí tu solicitud. En breve te envío la <strong>Guía para formalizar tu carrera artística en Ecuador</strong> directamente a este correo.
              </p>
              <p style="margin: 0 0 32px; font-size: 16px; line-height: 1.6; color: #7a6a55;">
                Mientras tanto, si tienes alguna duda puedes responder directamente a este email y con gusto te ayudo.
              </p>
              <p style="margin: 0; font-size: 15px; color: #1a1208;">Un abrazo,<br/><strong>Irina López</strong><br/><span style="color: #7a6a55; font-size: 13px;">Abogada · Gestora Cultural · Licenciada en Música</span></p>
            </div>
          </div>
        `,
      },
    ]);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al enviar el email' });
  }
}
