// Server Component : rendu en HTML au moment du build, aucun JavaScript propre à la page envoyé au navigateur.
import {
  profil,
  formation,
  experiences,
  projets,
  competences,
  langues,
  loisirs,
} from "@/data/cv";

function Entree({
  titre,
  periode,
  detail,
  children,
}: {
  titre: string;
  periode?: string;
  detail?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="entree">
      <header>
        <h3>{titre}</h3>
        {periode ? <span className="periode">{periode}</span> : null}
      </header>
      {detail ? <p className="detail">{detail}</p> : null}
      {children}
    </article>
  );
}

export default function Page() {
  return (
    <main>
      <header className="entete">
        <h1>{profil.nom}</h1>
        <p className="titre">{profil.titre}</p>
        <ul className="contact">
          <li>{profil.ville}</li>
          <li>
            <a href={`mailto:${profil.email}`}>{profil.email}</a>
          </li>
          <li>
            <a href={profil.github}>GitHub</a>
          </li>
          <li>
            <a href={profil.portfolio}>Portfolio</a>
          </li>
          <li>{profil.permis}</li>
        </ul>
      </header>

      <section aria-labelledby="recherche">
        <h2 id="recherche">Recherche</h2>
        <p>{profil.recherche}</p>
      </section>

      <section aria-labelledby="formation">
        <h2 id="formation">Formation</h2>
        {formation.map((f) => (
          <Entree key={f.intitule} titre={f.intitule} periode={f.periode} detail={f.detail} />
        ))}
      </section>

      <section aria-labelledby="experience">
        <h2 id="experience">Expérience</h2>
        {experiences.map((e) => (
          <Entree key={e.intitule} titre={e.intitule} periode={e.periode} detail={e.detail}>
            <ul>
              {e.missions.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Entree>
        ))}
      </section>

      <section aria-labelledby="projets">
        <h2 id="projets">Projets — Data & Machine Learning</h2>
        {projets.map((p) => (
          <Entree key={p.intitule} titre={p.intitule} periode={p.periode}>
            <p>{p.description}</p>
          </Entree>
        ))}
      </section>

      <section aria-labelledby="competences">
        <h2 id="competences">Compétences</h2>
        <dl className="competences">
          {competences.map((c) => (
            <div key={c.categorie}>
              <dt>{c.categorie}</dt>
              <dd>{c.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="colonnes">
        <section aria-labelledby="langues">
          <h2 id="langues">Langues</h2>
          <p>{langues.join(" · ")}</p>
        </section>
        <section aria-labelledby="loisirs">
          <h2 id="loisirs">Loisirs</h2>
          <p>{loisirs.join(" · ")}</p>
        </section>
      </div>

      <footer>
        <p>
          Site éco-conçu : export statique Next.js, aucune image, aucune police téléchargée, aucun
          traceur.
        </p>
      </footer>
    </main>
  );
}
