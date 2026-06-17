import { CONTACT_INFO } from "@/constants/contact";

export const metadata = {
  title: "Assistance aux patients | SOS Ambulance Rabat-Salé",
  description: "Prise en charge, accompagnement et soins sur place lorsque nécessaire.",
};

export default function AssistancePatientsPage() {
  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <h1>Assistance aux patients</h1>
          <p>Un accompagnement humain et rassurant, à chaque étape du parcours médical.</p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="columns">
            <div className="col">
              <div className="service-panel">
                <h2>Nos prestations</h2>
                <div className="cards">
                  <div className="icon-line">
                    <span className="ico">🚐</span>
                    <div>
                      <h3>Aide aux déplacements et transferts</h3>
                      <p>Transport sécurisé et adapté aux besoins.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">🛏️</span>
                    <div>
                      <h3>Préparation et confort du patient</h3>
                      <p>Accompagnement personnalisé avant chaque rendez-vous.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">📞</span>
                    <div>
                      <h3>Communication avec la famille</h3>
                      <p>Informations claires et régulières.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">🧭</span>
                    <div>
                      <h3>Conseils et coordination logistique</h3>
                      <p>Démarches simplifiées et organisation sereine.</p>
                    </div>
                  </div>
                </div>

                <p>Nous plaçons l’humain au coeur de notre accompagnement, pour plus de sérénité et de confiance.</p>

                <a className="btn-primary wide" href={`tel:${CONTACT_INFO.phone}`}>Demander une assistance</a>
              </div>
            </div>
            <div className="col">
              <img src="/Assets/VB4.svg" alt="assistance" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


