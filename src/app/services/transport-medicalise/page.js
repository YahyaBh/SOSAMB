import { CONTACT_INFO } from "@/constants/contact";

export const metadata = {
  title: "Transport médicalisé | SOS Ambulance Rabat-Salé",
  description: "Transport sanitaire sécurisé avec équipement médical et équipe formée.",
};

export default function TransportMedicalisePage() {
  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <h1>Transport médicalisé</h1>
          <p>Une prise en charge sécurisée et adaptée, pour chaque patient.</p>
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
                    <span className="ico">🚑</span>
                    <div>
                      <h3>Transport spécialisé en ambulance</h3>
                      <p>Matériel adapté et équipe formée.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">🏥</span>
                    <div>
                      <h3>Transferts entre établissements de santé</h3>
                      <p>Coordination avec la structure d'accueil.</p>
                    </div>
                  </div>
                  <div className="icon-line">
                    <span className="ico">📍</span>
                    <div>
                      <h3>Prise en charge à domicile</h3>
                      <p>Confort et sécurité dès le départ.</p>
                    </div>
                  </div>
                </div>

                <a className="btn-primary wide" href={`tel:${CONTACT_INFO.phone}`}>Demander un transport</a>
              </div>
            </div>
            <div className="col">
              <img src="/Assets/VB5.svg" alt="ambulance" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


