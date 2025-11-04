function Stat({ label, value }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="badge mb-3">{kicker}</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <div className="container-prose mt-6 space-y-4">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <header className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="badge mb-2">Mastermind ferm? ? 8 ? 10 dirigeants</p>
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Le Cercle Scale
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
                Passer de l'artisanat ? l'entreprise <span className="text-white font-semibold">digitalis?e</span> et <span className="text-white font-semibold">pilot?e par la data</span>. 12 journ?es, 1 par mois, sur 1 an.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#candidature" className="btn-primary">Candidater maintenant</a>
                <a href="#programme" className="btn-secondary">D?couvrir le programme</a>
              </div>
            </div>
            <div className="grid w-full max-w-xl grid-cols-2 gap-4 md:max-w-md">
              <Stat label="Exp?rience dans le secteur" value="25 ans" />
              <Stat label="?quipe actuelle" value="30 salari?s" />
              <Stat label="Impay?s" value="0,04%" />
              <Stat label="Croissance sans turnover" value="10 ? 80" />
            </div>
          </div>
        </div>
      </header>

      {/* Positionnement */}
      <Section id="positionnement" kicker="Votre positionnement" title="Une exp?rience rare, des r?sultats prouv?s">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <li className="card p-5">
            <strong>25 ans sur le terrain</strong> ? direction multi-sites, consolidation, M&A, r?organisation structurelle.
          </li>
          <li className="card p-5">
            <strong>30 collaborateurs</strong> aujourd'hui, avec des fonctions claires, gouvernance et CODIR efficaces.
          </li>
          <li className="card p-5">
            <strong>0,04% d'impay?s</strong> vs 2?5% dans le secteur gr?ce ? une m?thode de facturation, relance et contr?le.
          </li>
          <li className="card p-5">
            <strong>Scale sans turnover</strong> ? d?j? r?alis? : passage de 10 ? 80 salari?s sans casse sociale.
          </li>
        </ul>
      </Section>

      {/* Programme */}
      <Section id="programme" kicker="Programme 12 mois" title="Un parcours en 4 trimestres pour structurer, digitaliser et scaler">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">T1 ? Fondations (M1?M3)</h3>
            <p className="text-white/80">Objectif : sortir du mode pompier, structurer.</p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Jour 1 ? Diagnostic & Gouvernance</strong>
                <div className="text-white/70">O? vous passez vraiment votre temps; organigramme fonctionnel; installer un CODIR (m?me ? 10 salari?s); d?l?gation strat?gique.</div>
              </li>
              <li>
                <strong>Jour 2 ? Process & Facturation</strong>
                <div className="text-white/70">M?thode "0,04% d'impay?s"; cartographie des 7 processus cl?s; identifier les goulots d'?tranglement.</div>
              </li>
              <li>
                <strong>Jour 3 ? RH & Croissance</strong>
                <div className="text-white/70">Scaler sans turnover; recrutement & fid?lisation; plan de croissance 3 ans.</div>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">T2 ? Digitalisation (M4?M6)</h3>
            <p className="text-white/80">Objectif : fiabiliser la data et fluidifier les op?rations.</p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Jour 4 ? Cartographie SI & Outils</strong>
                <div className="text-white/70">Audit outils actuels; choix des briques; interop?rabilit?; s?curit? & conformit?.</div>
              </li>
              <li>
                <strong>Jour 5 ? Flux digitaux</strong>
                <div className="text-white/70">Du terrain ? la facturation: planification, tra?abilit?, contr?le; automatisations pragmatiques.</div>
              </li>
              <li>
                <strong>Jour 6 ? Qualit? & Standardisation</strong>
                <div className="text-white/70">SOPs vivants; kits de formation; gestion documentaire; mesure de l'adoption.</div>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">T3 ? Pilotage par la data (M7?M9)</h3>
            <p className="text-white/80">Objectif : d?cider vite avec des chiffres fiables.</p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Jour 7 ? KPI & tableaux de bord</strong>
                <div className="text-white/70">North Star metrics; KPI op?rationnels et financiers; cadence de pilotage.</div>
              </li>
              <li>
                <strong>Jour 8 ? Data governance</strong>
                <div className="text-white/70">Qualit? des donn?es; ownership; dictionnaire; contr?les et alertes.</div>
              </li>
              <li>
                <strong>Jour 9 ? Pr?vision & sc?narios</strong>
                <div className="text-white/70">Budget, rolling forecast, sc?narios capacit?/demande; plan d'action.</div>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">T4 ? Leadership & Scale (M10?M12)</h3>
            <p className="text-white/80">Objectif : rendre l'entreprise autonome et scalable.</p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Jour 10 ? Leader syst?me</strong>
                <div className="text-white/70">Posture dirigeant; arbitrages; rituels; gestion de crise sans mode pompier.</div>
              </li>
              <li>
                <strong>Jour 11 ? D?ploiement multi-sites</strong>
                <div className="text-white/70">Playbooks; ouvrabilit?; contr?le interne; synergies locales.</div>
              </li>
              <li>
                <strong>Jour 12 ? Capitalisation</strong>
                <div className="text-white/70">Bilan; feuille de route 12 mois; communaut? d'entraide et pairs.</div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Format */}
      <Section id="format" kicker="Format" title="12 journ?es, 1 par mois, groupe ferm? de pairs">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <li className="card p-5"><strong>Rythme</strong><div className="text-white/70">12 journ?es sur 12 mois, avec intersessions guid?es.</div></li>
          <li className="card p-5"><strong>Taille</strong><div className="text-white/70">Groupe de 8?10 g?rants maximum.</div></li>
          <li className="card p-5"><strong>Acc?s</strong><div className="text-white/70">Espace ressources, mod?les, SOPs et replays priv?s.</div></li>
        </ul>
      </Section>

      {/* Candidature */}
      <Section id="candidature" kicker="Candidater" title="Rejoindre le groupe">
        <p>
          Candidature sur s?lection pour assurer l'homog?n?it? du groupe et la valeur des ?changes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn-primary" href="mailto:candidature@lecerclescale.fr?subject=Candidature%20?%20Le%20Cercle%20Scale&body=Nom%20%2F%20Entreprise%20%2F%20Taille%20%2F%20Enjeux">Candidater par email</a>
          <a className="btn-secondary" href="#programme">Voir le d?tail du programme</a>
        </div>
        <p className="mt-4 text-white/60 text-sm">R?ponse sous 72h ouvr?es.</p>
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        <div className="mx-auto max-w-6xl px-5">
          ? {new Date().getFullYear()} Le Cercle Scale ? Tous droits r?serv?s.
        </div>
      </footer>
    </main>
  );
}
