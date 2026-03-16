import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { nom, email, telephone, objet, date, personnes, message } = await request.json()

    if (!nom || !email) {
      return NextResponse.json({ error: 'Nom et email obligatoires' }, { status: 400 })
    }

    // Initialisation DANS la fonction, pas au niveau du module
    // → Next.js ne l'exécute pas pendant le build
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email de notification → toi
    await resend.emails.send({
      from:    'Fely Traiteur <onboarding@resend.dev>',
      to:      [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `[Nouveau message] ${objet || 'Demande de contact'} — ${nom}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#111;padding:24px;text-align:center;">
            <h1 style="color:#B8862A;font-size:20px;margin:0;letter-spacing:3px;">FELY TRAITEUR</h1>
            <p style="color:#888;font-size:11px;margin:4px 0 0;">Nouveau message reçu</p>
          </div>
          <div style="padding:28px;background:#f9f9f9;border:1px solid #eee;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;width:140px;">Nom</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;font-size:12px;font-weight:bold;">${nom}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#B8862A;font-size:12px;">${email}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;font-size:12px;">${telephone || 'Non renseigné'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;">Objet</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;font-size:12px;">${objet || 'Non renseigné'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;">Date</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;font-size:12px;">${date || 'Non renseignée'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;">Personnes</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;font-size:12px;">${personnes || 'Non renseigné'}</td></tr>
            </table>
            <div style="margin-top:20px;">
              <p style="color:#888;font-size:12px;margin:0 0 8px;">Message :</p>
              <div style="background:#fff;border:1px solid #eee;padding:14px;font-size:13px;color:#333;line-height:1.7;">${message || 'Aucun message'}</div>
            </div>
            <div style="margin-top:20px;text-align:center;">
              <a href="mailto:${email}" style="background:#B8862A;color:#fff;padding:12px 28px;text-decoration:none;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Répondre à ${nom}</a>
            </div>
          </div>
          <div style="padding:16px;text-align:center;color:#999;font-size:11px;">Fely Traiteur · Cité Baobab, Grand Mbao · Dakar</div>
        </div>
      `,
    })

    // Email de confirmation → le client
    await resend.emails.send({
      from:    'Fely Traiteur <onboarding@resend.dev>',
      to:      [email],
      subject: `Votre message a bien été reçu — Fely Traiteur`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#111;padding:24px;text-align:center;">
            <h1 style="color:#B8862A;font-size:20px;margin:0;letter-spacing:3px;">FELY TRAITEUR</h1>
            <p style="color:#888;font-size:11px;margin:4px 0 0;">Restaurant · Fast-Food · Traiteur · Glacier · Dakar</p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #eee;">
            <p style="font-size:15px;color:#111;margin:0 0 16px;">Bonjour <strong>${nom}</strong>,</p>
            <p style="font-size:13px;color:#555;line-height:1.75;margin:0 0 16px;">
              Merci pour votre message. Nous l'avons bien reçu et nous vous répondrons dans les <strong style="color:#B8862A;">24 heures</strong>.
            </p>
            <p style="font-size:13px;color:#555;line-height:1.75;margin:0 0 24px;">
              Pour toute urgence : <strong style="color:#B8862A;">+221 77 653 60 02</strong>
            </p>
            <div style="background:#f9f7f4;border-left:3px solid #B8862A;padding:16px;margin:0 0 24px;">
              <p style="font-size:12px;color:#888;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Récapitulatif</p>
              <p style="font-size:13px;color:#333;margin:4px 0;"><strong>Objet :</strong> ${objet || 'Demande générale'}</p>
              ${date ? `<p style="font-size:13px;color:#333;margin:4px 0;"><strong>Date :</strong> ${date}</p>` : ''}
              ${personnes ? `<p style="font-size:13px;color:#333;margin:4px 0;"><strong>Personnes :</strong> ${personnes}</p>` : ''}
            </div>
            <p style="font-size:13px;color:#555;font-style:italic;margin:0;">"On ne pouvait pas rêver mieux"</p>
          </div>
          <div style="padding:20px;background:#111;text-align:center;">
            <p style="color:#888;font-size:11px;margin:0 0 8px;">Cité Baobab, Grand Mbao · Dakar, Sénégal · Ouvert 7j/7</p>
            <p style="margin:0;">
              <a href="https://instagram.com/fely_traiteur_officiel" style="color:#B8862A;font-size:11px;text-decoration:none;">Instagram</a>
              &nbsp;·&nbsp;
              <a href="tel:+221776536002" style="color:#B8862A;font-size:11px;text-decoration:none;">+221 77 653 60 02</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Erreur envoi email:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}