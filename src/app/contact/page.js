export const metadata = {
  title: "Contact | SOS Ambulance Rabat-Salé",
  description: "Contactez-nous 24/7 pour une intervention ou un renseignement.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <h1>Contactez-nous immédiatement</h1>
          <div className="badge-line">✅ Disponible 24h/24 et 7j/7</div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="contact-panel">
            <div className="left">
              <h2>Nos coordonnées</h2>
              <div className="lines">
                <div className="icon-line"><span className="ico">📞</span><div><strong>Téléphone</strong><p><a href="tel:+2120752921397">+212 0752921397</a></p></div></div>
                <div className="icon-line"><span className="ico">✉️</span><div><strong>Email</strong><p><a href="mailto:contact@sosambulance.com">contact@sosambulance.com</a></p></div></div>
                <div className="icon-line"><span className="ico">📍</span><div><strong>Adresse</strong><p>Bloc 11 numéro 776 Hay Essalam, 11003, Rabat-Salé</p></div></div>
              </div>
              <div className="actions">
                <a className="btn-primary" href="tel:+2120752921397">Appeler maintenant</a>
                <a className="btn-secondary" href="mailto:contact@sosambulance.com">Envoyer un email</a>
              </div>
            </div>
            <div>
              <iframe className="gmap_iframe" style={{width: "100%", height: "360px", border: 0, borderRadius: "12px"}} loading="lazy" allowFullScreen src="https://maps.google.com/maps?width=&amp;height=&amp;hl=fr&amp;q=Bloc 11 numéro 776 Hay Essalam, 11003 SOS Rabat/Salé AMBULANCE&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


