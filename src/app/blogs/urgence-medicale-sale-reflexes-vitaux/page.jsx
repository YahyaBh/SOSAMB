import Link from "next/link";

export const metadata = {
  title: "Urgence Médicale à Salé : Les 3 Réflexes Vitaux Avant l'Ambulance",
  description:
    "Trois réflexes simples pour agir vite et en sécurité à Salé en attendant l'ambulance.",
};

const PHONE = "+2120752921397";

export default function BlogPost() {
  return (
    <main style={{ minHeight: "150vh", backgroundColor: "#f9fafb", padding: "4rem 0", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1f2937", lineHeight: "1.25", marginBottom: "2rem", textAlign: "left" }}>
          Urgence Médicale à Salé : Les 3 Réflexes Vitaux Avant l'Ambulance
        </h1>
        <img
          src="/Assets/blog/blog1.jpg"
          alt="Medical Emergency Splash"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "3rem", objectFit: "cover" }}
        />

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>1) Alerter rapidement</h2>
          <p style={{ color: "#374151", marginBottom: "1.5rem", fontSize: "0.95rem", textAlign: "left" }}>
            Appelez le service adapté et restez en ligne jusqu'aux consignes finales :
          </p>
          <ul style={{ marginLeft: "1.2rem", paddingLeft: 0, color: "#374151", marginBottom: "1.5rem", listStyleType: "disc", listStylePosition: "outside", textAlign: "left" }}>
            <li style={{ marginBottom: "0.25rem" }}>SAMU (141) : urgence vitale.</li>
            <li style={{ marginBottom: "0.25rem" }}>Sapeurs‑Pompiers (15) : accident, incendie ou si le 141 ne répond pas.</li>
            <li style={{ marginBottom: "0.25rem" }}>
              Ambulance privée :{" "}
              <a href={`tel:${PHONE}`} style={{ color: "#2563eb", textDecoration: "underline" }}>
                +212 7 52 92 13 97
              </a>{" "}
              pour un transport rapide et orienté.
            </li>
          </ul>
          <p style={{ color: "#374151", fontSize: "0.95rem", textAlign: "left" }}>
            Donnez calmement l'adresse précise (quartier, repères), décrivez la situation et l'état de la personne (respiration, conscience, âge).
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>2) Sécuriser et surveiller</h2>
          <p style={{ color: "#374151", fontSize: "0.95rem", textAlign: "left" }}>
            Écartez les dangers immédiats. Si la personne est inconsciente mais respire, placez‑la en{" "}
            <strong>PLS</strong> (sur le côté, bouche vers le sol). S'il n'y a plus de respiration et que vous êtes formé, commencez un{" "}
            <strong>massage cardiaque</strong> ; sinon, suivez les consignes de l'opérateur.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>3) Faciliter l'arrivée des secours</h2>
          <p style={{ color: "#374151", fontSize: "0.95rem", textAlign: "left" }}>
            Dégagez l'accès, préparez documents utiles (pièce d'identité, dossier médical) et restez joignable au téléphone pour guider l'équipe.
          </p>
        </section>

        <hr style={{ margin: "3rem 1rem", borderColor: "#e5e7eb" }} />

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem", textAlign: "left" }}>Besoin d'un transport rapide à Salé ?</h2>
          <p style={{ color: "#374151", marginBottom: "1.5rem", fontSize: "0.95rem", textAlign: "left" }}>
            Notre équipe est joignable 24/7 pour un transfert rapide et confortable vers l'établissement de votre choix.
          </p>
          <a
            href={`tel:${PHONE}`}
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
            Appeler : +212 7 52 92 13 97
          </a>
        </section>

        <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: "2rem", textAlign: "left" }}>
          Mots‑clés : urgence médicale Salé, appeler ambulance, premiers gestes, transport sanitaire.
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