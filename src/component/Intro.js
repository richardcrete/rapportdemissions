import React from "react";
import logo_mobytic from '../img/logo-mobytic.png';

class Intro extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Introduction</h2>
                        <h3>Contexte<br></br>Présentation de Mobytic</h3>
                        <a className="next" href="#contexte">
                            Lire l'introduction
                        </a>
                    </div>
                </div>
                <section id="contexte" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Contexte</h2>
                        <p>Dans le cadre de ma formation <span>Licence Professionnelle Métiers du numérique, conception, rédaction et réalisation web, parcours Webdesigner - WebDéveloppeur</span>, nous devions réaliser notre année <span>en apprentissage, en alternance dans une entreprise</span>. Je me suis naturellement tourné vers des agences web de Mulhouse. Après quelques mois de recherche sans succès, <span>l'entreprise Mobytic</span> avait émis une offre d'emploi car elle cherchait un apprenti. J’ai postulé et j’ai eu la joie d’être l’étudiant choisi.</p>
                        <p>Pendant mon apprentissage, j'ai <span>construit des sites avec WordPress</span>. Je me suis aussi <span>formé à la création d'applications web avec la librairie ReactJS</span>.</p>
                        <p>Pendant ces mois d'apprentissage, j'ai p u tirer une problématique de tout ce que j'ai appris :</p><h2 className="h2">Comment bien choisir la technologique que l'on doit utiliser en abordant un projet ?</h2>
                        <p>Je vais répondre à cette problématique en décrivant les tâches que j'ai réalisées pour Mobytic. J'expliquerai dans un premier temps comment, grâce à WordPress, <span>faire un site vitrine ou e-commerce pour un besoin rapide</span>. Dans un second temps, je montrerai <span>ce que j'ai pu apprendre de ma formation sur ReactJS</span>.</p>
                    </div>
                </section>
                <section id="presentationMobytic" className="sombre vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Présentation de Mobytic</h2>
                        <p><span>Mobytic SARL</span> est une société Mulhousienne <span>créée en 2014 par Nicolas LOUIS</span>.</p>
                        <p>L'activité de l'entreprise s'articule autour de <span>trois axes</span> :</p>
                        <ul>
                            <li>création de sites internet</li>
                            <li>création de logiciels sur mesure</li>
                            <li>création d'applications mobiles</li>
                        </ul>
                        <p>J'ai intégré l'équipe en décembre 2019, entant qu'apprenti développeur web. La stratégie de Mobytic se fonde sur <span>la pérénité des activités classiques</span> (sites internet), et la volonté d'<span>aller vers des projets innovants</span> (logicels sur mesure et applications mobiles)</p>
                        <div className="img">
                            <img width="10%" src={logo_mobytic}></img>
                            <p className="legend">Logo de Mobytic</p>
                        </div>
                        <a id="wordpress" onClick={(event) => {
                            this.props.functionChooseChapter(event.target.id);
                        }} className="next" href="#">
                            Lire la Partie 1
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

export default Intro;