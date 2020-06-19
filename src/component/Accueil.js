import React from "react";

class Accueil extends React.Component {
    render() {
        let alt = 'imgalt';
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Apprenti développeur web</h2>
                        <h3>Licence Professionnelle Webdesigner - Web développeur<br></br>Année scolaire 2019/2020<br></br>Décembre 2019 à juin 2020</h3>
                        <br></br>
                        <h4>Tuteur en entreprise : Nicolas Louis</h4>
                        <h4>Tuteur pédagogique : Sébastien Lehmann</h4>
                        <p>Université de Haute Alsace - IUT de Mulhouse - Département MMI (60 rue Albert Camus 68200 Mulhouse)</p>
                        <p>Mobytic (9 rue des Franciscains 68100 Mulhouse)</p>
                        <a className="next" href="/#remerciements">
                            Lire mon rapport
                        </a>
                    </div>
                </div>
                <section id="remerciements" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Remerciements</h2>
                        <p>J’aimerais remercier toutes les personnes qui ont participé de près ou de loin à la réussite de mon apprentissage.</p>
                        <p>Je remercie <span>Nicolas LOUIS</span>, dirigeant de Mobytic et Tuteur en entreprise, pour son recrutement, tous ses conseils et les nouveautés que j'ai pu apprendre au sein de l'entreprise ces mois d'apprentissage.</p>
                        <p>Je remercie <span>Raphaël DE OLIVEIRA</span>, mon collègue, qui m'a fait beaucoup de cours et d'exercices sur ReactJS pour que je puisse progresser.</p>
                        <p>Je remercie <span>Sébastien LEHMANN</span>, mon tuteur pédagogique, qui a fait le déplacement (et un rendez-vous à distance !) pour me suivre et voir mon travail.</p>
                        <p>Je voudrais remercier toutes les personnes qui m’ont aidé à la rédaction de ce rapport de stage : <span>Nicolas LOUIS et ma famille</span>.</p>
                        <a id="intro" alt={alt} onClick={(event) => {
                            this.props.functionChooseChapter(event.target.id);
                        }} className="next" href="/#">
                            Lire l'introduction
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

export default Accueil;