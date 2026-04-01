import{NextResponse}from'next/server'
export async function POST(request){
  try{
    const{nom,email,telephone,objet,date,personnes,message}=await request.json()
    if(!nom||!email)return NextResponse.json({error:'Champs obligatoires'},{ status:400})
    const{Resend}=await import('resend')
    const resend=new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from:'Fely Traiteur <onboarding@resend.dev>',
      to:[process.env.CONTACT_EMAIL],
      replyTo:email,
      subject:`[Nouveau message] ${objet||'Contact'} — ${nom}`,
      html:`<div style="font-family:Arial;max-width:600px;margin:0 auto">
        <div style="background:#111;padding:20px;text-align:center"><h1 style="color:#B8862A;margin:0;letter-spacing:3px">FELY TRAITEUR</h1></div>
        <div style="padding:24px;background:#f9f9f9">
          <p><strong>De :</strong> ${nom} (${email})</p>
          <p><strong>Téléphone :</strong> ${telephone||'—'}</p>
          <p><strong>Objet :</strong> ${objet||'—'}</p>
          <p><strong>Date :</strong> ${date||'—'} | <strong>Personnes :</strong> ${personnes||'—'}</p>
          <hr/><p>${message||'—'}</p>
          <a href="mailto:${email}" style="background:#B8862A;color:#fff;padding:10px 24px;text-decoration:none;display:inline-block;margin-top:16px">Répondre</a>
        </div></div>`,
    })
    await resend.emails.send({
      from:'Fely Traiteur <onboarding@resend.dev>',
      to:[email],
      subject:'Votre message a bien été reçu — Fely Traiteur',
      html:`<div style="font-family:Arial;max-width:600px;margin:0 auto">
        <div style="background:#111;padding:20px;text-align:center"><h1 style="color:#B8862A;margin:0;letter-spacing:3px">FELY TRAITEUR</h1></div>
        <div style="padding:24px;background:#fff">
          <p>Bonjour <strong>${nom}</strong>,</p>
          <p>Votre message a bien été reçu. Nous vous répondrons dans les <strong style="color:#B8862A">24 heures</strong>.</p>
          <p>Pour toute urgence : <strong style="color:#B8862A">+221 77 653 60 02</strong></p>
          <p style="font-style:italic;color:#888;margin-top:20px">"On ne pouvait pas rêver mieux"</p>
        </div>
        <div style="background:#111;padding:14px;text-align:center;color:#888;font-size:11px">Cité Baobab, Grand Mbao · Dakar · Ouvert 7j/7</div>
      </div>`,
    })
    return NextResponse.json({success:true})
  }catch(err){
    console.error('Email error:',err)
    return NextResponse.json({error:'Erreur serveur'},{status:500})
  }
}
