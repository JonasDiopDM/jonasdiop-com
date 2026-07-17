"use client";

import Link from "next/link";
import { SITE_CONTENT } from "./site-content";

export function ServicesPageV2(){
  const routes=[
    ["01","LEVIER TACTIQUE","Installer rapidement une capacité précise.","BOOTCAMPS","/evenements/bootcamps"],
    ["02","VENTE","Transformer davantage de demande en revenu.","THE BREAKTHROUGH™","/services/the-breakthrough"],
    ["03","SCALING","Construire une entreprise qui dépend moins de toi.","THE SHIFT™","/services/the-shift"],
    ["04","GOUVERNANCE","Décider au niveau du capital, de l’influence et de l’héritage.","THE DYNASTY COUNCIL™","/services/the-dynasty-council"],
  ];
  return <>
    <section className="service-selector"><p className="eyebrow">QUEL EST TON GOULOT ?</p><h2>Une seule route doit être prioritaire.</h2><div>{routes.map(x=><Link href={x[4]} key={x[0]}><span>{x[0]}</span><small>{x[1]}</small><p>{x[2]}</p><h3>{x[3]}</h3><b>EXPLORER ↗</b></Link>)}</div></section>
    <section className="service-compare"><h2>Comparer les parcours.</h2><div className="compare-table"><p><b>PARCOURS</b><b>PROBLÈME</b><b>HORIZON</b><b>ACCÈS</b></p><p><span>Bootcamps</span><span>Levier tactique ciblé</span><span>3 jours</span><span>Liste prioritaire</span></p><p><span>The Breakthrough™</span><span>Positionnement, pipeline et conversion</span><span>8–12 semaines</span><span>Candidature</span></p><p><span>The Shift™</span><span>Architecture globale de scaling</span><span>12 semaines</span><span>Candidature</span></p><p><span>The Dynasty Council™</span><span>Gouvernance, capital et héritage</span><span>12 mois</span><span>Préqualification</span></p></div></section>
    <section className="service-process"><p className="eyebrow">ORIENTATION</p><div>{[["01","DIAGNOSTIC","Comprendre le contexte et le véritable goulot."],["02","ORIENTATION","Choisir le parcours adapté — ou aucune offre si le fit n’existe pas."],["03","ARCHITECTURE","Définir le système, les livrables et les indicateurs."],["04","EXÉCUTION","Installer, mesurer, corriger et documenter."]].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  </>;
}

export function ResultsPageV2(){const cases=[
  ["CAS 01 · ARCHITECTURE","Du fondateur-goulot à un système pilotable","AVANT","Priorités concurrentes, offre dispersée, décisions centralisées et absence de visibilité sur la capacité.","INTERVENTION","Diagnostic du goulot, offre phare, règles de décision, Business OS et scorecard hebdomadaire.","APRÈS","Une structure plus lisible, une exécution concentrée et des responsabilités documentées."],
  ["CAS 02 · VENTE","De conversations intuitives à un pipeline mesurable","AVANT","Qualification variable, appels improvisés, objections découvertes trop tard et suivi irrégulier.","INTERVENTION","Message, script diagnostic, critères de qualification, pipeline, relances et revue des conversions.","APRÈS","Un processus commercial transmissible et chaque perte reliée à une étape précise."],
  ["CAS 03 · LEVIER","Du temps absorbé à une capacité libérée","AVANT","Le fondateur exécute des tâches à faible valeur et reste indispensable à la livraison.","INTERVENTION","Audit du temps, Kill List, productisation, automatisation, délégation et contrôle qualité.","APRÈS","Davantage de temps stratégique et une livraison moins dépendante de l’héroïsme du fondateur."],
];return <>
  <section className="proof-standard"><div><p className="eyebrow">RÉSULTATS · TRANSFORMATIONS</p><h2>La crédibilité commence par montrer le passage.</h2></div><p>Chaque étude présente le point de départ, l’architecture installée et la situation obtenue. Les chiffres et citations nominatives seront ajoutés uniquement avec données vérifiables et autorisation écrite.</p></section>
  <section className="case-studies">{cases.map(c=><article key={c[0]}><p className="eyebrow">{c[0]}</p><h2>{c[1]}</h2><div><section><b>{c[2]}</b><p>{c[3]}</p></section><section><b>{c[4]}</b><p>{c[5]}</p></section><section><b>{c[6]}</b><p>{c[7]}</p></section></div></article>)}</section>
  <section className="evidence-system"><div><p className="eyebrow">CE QUI EST CONSTRUIT</p><h2>Des outils qui rendent la transformation mesurable.</h2></div><div>{["Diagnostic CDT™ du goulot","Audit du temps et Kill List","Architecture d’offre phare","Pipeline et scorecard de vente","Business OS hebdomadaire","Plan de scaling 12 mois"].map((x,i)=><p key={x}><span>0{i+1}</span>{x}</p>)}</div></section>
  <section className="testimonial-ready"><img src="/media/speaking-wide.jpg" alt="Jonas Diop devant une audience"/><div><p className="eyebrow">15+ ANNÉES · 270+ ENTREPRENEURS</p><h2>Les preuves détaillées arrivent ici.</h2><p>Cette structure accueillera les avis vidéo, citations autorisées, captures de données et comparaisons avant/après des clients.</p><a href={SITE_CONTENT.links.gameChangerCall} target="_blank" rel="noreferrer" className="btn gold">PARLER DE MA TRANSFORMATION</a></div></section>
  </>}
