import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Faltan campos' });

  try {
    await resend.emails.send({
      from: 'Irina López Web <onboarding@resend.dev>',
      to: process.env.RESEND_TO,
      reply_to: email,
      subject: `📬 Nueva suscripción al newsletter — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1208;">
          <div style="background: #b8972a; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">
              Nueva suscripción al newsletter
            </h1>
          </div>
          <div style="background: #faf7f2; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e0d4;">
            <p style="margin: 0 0 8px; font-size: 14px; color: #7a6a55; text-transform: uppercase; letter-spacing: 2px;">Nombre</p>
            <p style="margin: 0 0 24px; font-size: 18px; font-weight: bold;">${name}</p>

            <p style="margin: 0 0 8px; font-size: 14px; color: #7a6a55; text-transform: uppercase; letter-spacing: 2px;">Email</p>
            <p style="margin: 0 0 32px; font-size: 18px;">${email}</p>

            <a href="mailto:${email}?subject=Bienvenida a Charlas de Domingo"
               style="display: inline-block; background: #b8972a; color: #fff; padding: 14px 28px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: bold; letter-spacing: 1px;">
              Responderle →
            </a>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al enviar el email' });
  }
}
