export const metadata = {
  title: "Intervention d'urgence | SOS Ambulance Rabat-Salé",
  description: "Réponse rapide aux situations d'urgence avec prise en charge immédiate.",
};

export default function InterventionUrgencePage() {
  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <h1>Intervention d'urgence</h1>
          <p>Une réponse rapide et efficace en cas de nécessité</p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="columns">
            <div className="col">
              <div className="service-panel">
                <h2>Nos services</h2>
                <div className="cards">
                  <div className="icon-line">
                    <span className="ico">➕</span>
                    <div>
                      <h3>Secours d’urgence</h3>
                      <p>Départ rapide et prise en charge immédiate.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">💓</span>
                    <div>
                      <h3>Récupération de l’état de santé</h3>
                      <p>Stabilisation et sécurisation du patient.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">🏥</span>
                    <div>
                      <h3>Prise en charge hospitalière</h3>
                      <p>Accompagnement jusqu’à l’admission.</p>
                    </div>
                  </div>
                </div>

                <a className="btn-primary wide" href="tel:+2120752921397">Demander une intervention</a>
              </div>
            </div>
            <div className="col">
              <img src="/Assets/VB3.svg" alt="urgence" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


