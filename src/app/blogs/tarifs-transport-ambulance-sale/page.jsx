import Link from "next/link";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata = {
  title: "Combien Coûte un Transport en Ambulance à Salé ? Le Guide des Tarifs",
  description:
    "Découvrez les tarifs des transports en ambulance à Salé, les facteurs qui influencent les prix et nos conseils pour bien anticiper les coûts.",
};

export default function BlogPost() {
  return (
    <main style={{ minHeight: "150vh", backgroundColor: "#f9fafb", padding: "4rem 0", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1f2937", lineHeight: "1.25", marginBottom: "2rem", textAlign: "left" }}>
          Combien Coûte un Transport en Ambulance à Salé ? Le Guide des Tarifs
        </h1>
        <img
          src="/Assets/blog/blog3.jpg"
          alt="Ambulance Pricing Guide"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "3rem", objectFit: "cover" }}
        />

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>1. Les Facteurs qui Déterminent le Prix</h2>
          <p style={{ color: "#374151", marginBottom: "1.5rem", fontSize: "0.95rem", textAlign: "left" }}>
            Le coût d'un transport en ambulance à Salé dépend de plusieurs éléments clés que nous détaillons pour vous :
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f3f4f6" }}>
                <th style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Facteur</th>
                <th style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Impact sur le Prix</th>
                <th style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Exemple à Salé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}><strong>Distance</strong></td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Prix au kilomètre + forfait de base</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Salé → Rabat : 15-25 km</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}><strong>Type de Transport</strong></td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Urgent vs. programmé</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Urgence : +30% du tarif de base</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}><strong>Équipement Médical</strong></td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Surveillance, oxygène, etc.</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>+50-100 DH selon les besoins</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}><strong>Heure de Service</strong></td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Nuit, week-end, jours fériés</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Majoration de 20-50%</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}><strong>Personnel Accompagnant</strong></td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Infirmier, médecin</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>+100-300 DH par professionnel</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>2. Fourchettes de Prix Indicatives à Salé</h2>
          <p style={{ color: "#374151", marginBottom: "1.5rem", fontSize: "0.95rem", textAlign: "left" }}>
            Voici les tarifs moyens pratiqués par les services d'ambulance privée dans la région de Salé :
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "0.5rem", border: "1px solid #e5e7eb", textAlign: "left" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1f2937", marginBottom: "0.5rem" }}>Transport Standard</h3>
              <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "0.95rem" }}><strong>Prix :</strong> 200-400 DH</p>
              <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>Transport basique avec chauffeur et brancardier. Idéal pour sorties d'hôpital, rendez-vous médicaux.</p>
            </div>
            <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "0.5rem", border: "1px solid #e5e7eb", textAlign: "left" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1f2937", marginBottom: "0.5rem" }}>Transport Médicalisé</h3>
              <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "0.95rem" }}><strong>Prix :</strong> 400-800 DH</p>
              <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>Avec infirmier, surveillance continue, oxygène. Pour patients nécessitant une surveillance médicale.</p>
            </div>
            <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "0.5rem", border: "1px solid #e5e7eb", textAlign: "left" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1f2937", marginBottom: "0.5rem" }}>Transport d'Urgence</h3>
              <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "0.95rem" }}><strong>Prix :</strong> 600-1200 DH</p>
              <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>Intervention rapide avec équipe médicale complète. Majoration pour service 24/7 et urgence.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>3. Exemples Concrets de Tarifs à Salé</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f3f4f6" }}>
                <th style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Trajet</th>
                <th style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Type</th>
                <th style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Prix Indicatif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Salé Centre → Hôpital Ibn Sina (Rabat)</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Standard</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>250-350 DH</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Hay Riad → Clinique Agdal (Rabat)</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Médicalisé</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>450-650 DH</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Bettana → Aéroport Rabat-Salé</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Standard</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>300-450 DH</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Tabriquet → Casablanca (Hôpital)</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>Médicalisé</td>
                <td style={{ padding: "0.5rem", border: "1px solid #e5e7eb" }}>800-1200 DH</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>4. Conseils pour Optimiser vos Coûts</h2>
          <div style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1f2937", marginBottom: "1rem" }}>Planification et Réservation</h3>
            <ul style={{ paddingLeft: "1.5rem", color: "#374151", marginBottom: "1.5rem", listStyleType: "disc", textAlign: "left" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>Réservez à l'avance :</strong> Les transports programmés coûtent 20-30% moins cher que les urgences.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Évitez les heures de pointe :</strong> Les tarifs sont plus élevés en soirée et week-end.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Regroupez les trajets :</strong> Si possible, combinez plusieurs déplacements.</li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1f2937", marginBottom: "1rem" }}>Comparaison et Négociation</h3>
            <ul style={{ paddingLeft: "1.5rem", color: "#374151", marginBottom: "1.5rem", listStyleType: "disc", textAlign: "left" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>Demandez un devis détaillé :</strong> Comparez les services inclus dans chaque prix.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Négociez pour les transports réguliers :</strong> Tarifs préférentiels pour patients chroniques.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Vérifiez les assurances :</strong> Certaines mutuelles remboursent partiellement les transports.</li>
            </ul>
          </div>
        </section>

        <hr style={{ margin: "3rem 1rem", borderColor: "#e5e7eb" }} />

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>Besoin d'un Devis Personnalisé ?</h2>
          <p style={{ color: "#374151", marginBottom: "1.5rem", fontSize: "0.95rem", textAlign: "left" }}>
            Chaque situation est unique. Contactez-nous pour obtenir un devis précis et transparent, adapté à vos besoins spécifiques.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-start" }}>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              style={{
                display: "inline-block",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontWeight: "500",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "background-color 0.2s",
                fontSize: "0.95rem"
              }}
              onMouseOver={{ backgroundColor: "#1d4ed8" }}
              onMouseOut={{ backgroundColor: "#2563eb" }}
            >
              Devis Gratuit : {CONTACT_INFO.phoneDisplay}
            </a>
            <div style={{ display: "flex", alignItems: "center", color: "#374151", fontSize: "0.9rem" }}>
              <span style={{ marginRight: "0.5rem" }}>📞</span>
              <span>Service 24/7 - Réponse immédiate</span>
            </div>
          </div>
        </section>

        <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: "2rem", textAlign: "left" }}>
          Mots-clés SEO : tarifs ambulance Salé, prix transport médical Rabat-Salé, devis ambulance, coût transport sanitaire, ambulance pas cher Salé
        </p>

        <Link
          href="/blogs"
          style={{ color: "#2563eb", fontWeight: "500", textDecoration: "none", fontSize: "0.95rem", textAlign: "left" }}
          onMouseOver={{ textDecoration: "underline" }}
          onMouseOut={{ textDecoration: "none" }}
        >
          ← Retour au blog
        </Link>
      </div>
    </main>
  );
}
