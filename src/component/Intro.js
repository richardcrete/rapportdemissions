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
                        <a className="next" href="/#contexte">
                            Lire l'introduction
                        </a>
                    </div>
                </div>
                <section id="contexte" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Contexte</h2>
                        <p>Dans le cadre de ma formation <span>Licence Professionnelle Métiers du numérique, conception, rédaction et réalisation web, parcours Webdesigner - WebDéveloppeur</span>, nous devions réaliser notre année en apprentissage, en alternance dans une entreprise. Je me suis naturellement tourné vers des agences web de Mulhouse. Après quelques recherches sans succès, l'entreprise Mobytic avait émis une offre d'emploi car elle cherchait un apprenti en développement web. J’ai postulé et j’ai eu la joie d’être l’étudiant choisi.</p>
                        <p>Pendant mon apprentissage, j'ai <span>construit des sites avec WordPress</span>. Je me suis également <span>formé à la création d'applications web avec la librairie ReactJS</span>.</p>
                        <p>Pendant ces mois d'apprentissage, au fil des missions, j'ai pu tirer une problématique qui aujourd'hui rythme mon quotidien de développeur web :</p><h2 className="h2">Comment choisir intelligemment une technologie pour un projet web ?</h2>
                        <p>La réponse que je vais tenter d’apporter ici s’appuie sur le quotidien d’une agence pour laquelle j’ai travaillé sur des projets concrets.</p>
                        <p>Je vais répondre à cette problématique en décrivant les tâches que j'ai réalisées pour Mobytic et mon évolution en tant que professionnel du web.</p>
                        <p>J'expliquerai dans un premier temps comment, grâce à WordPress il est possible de réaliser un site vitrine ou e-commerce pour un besoin précis. Dans un second temps, je montrerai ce que j'ai pu apprendre de ma formation sur ReactJS car l’entreprise s’intéresse à ce langage pour évoluer dans son offre.</p>
                        <p>Je précise que les clients cités dans ce rapport sont de vrais clients. L’entreprise Mobytic souhaite préserver une parfaite confidentialité de ces informations qui relèvent de son activité commerciale.</p>
                    </div>
                    <a className="next" href="/#presentationMobytic">
                        Lire la suite
                    </a>
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
                        <p>Cette posture d’entreprise est encrée profondément dans le long terme. J’ai donc contribué au quotidien de l’entreprise tout en me formant à l’avenir.</p>
                        <div className="img">
                            <img width="10%" alt="" src={logo_mobytic}></img>
                            <p className="legend">Logo de Mobytic</p>
                        </div>
                        <a id="wordpress" onClick={(event) => {
                            this.props.functionChooseChapter(event.target.id);
                        }} className="next" href="/#">
                            Lire la Partie 1
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

export default Intro;