import React from "react";

class Conclusion extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Conclusion</h2>
                        <a className="next" href="/#contexte">
                            Lire la conclusion
                        </a>
                    </div>
                </div>
                <section id="contexte" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Conclusion</h2>
                        <p>Pour conclure, nous pouvons dire que WordPress et ReactJS sont deux technologies totalement différentes. Toutes les deux proposent des avantages et des inconvénients qu'il faut étudier avant de se lancer dans un projet.</p>
                        <p>Pour aborder un projet, il faut avant tout connaitre les besoins exprimés par le client et les fonctionnalités qu'il désire.</p>
                        <p>Mais il faut aussi prendre en compte la pérénité de la technologie que l'ont veut utiliser.</p>
                        <p>Dans ce rapport, nous avons vu les différentes tâches que j'ai réalisées sur WordPress, qui m'ont rendu plus autonome pour créer une boutique en ligne. Nous avons aussi vu les prémices de mon apprentissage sur ReactJS, qui devrait se terminer par une adaptation sur React Native, puisque j'aimerais rejoindre à la prochaine rentrée la formation Développeur de Solutions Mobiles et Connectées de la Chambre des Commerces et de l'Industrie. Cela me permettra aussi de poursuivre l'évolution de Mobytic, et travailler avec Raphael DE OLIVEIRA.</p>
                    </div>
                    <a id="annexes" onClick={(event) => {
                        this.props.functionChooseChapter(event.target.id);
                    }} className="next" href="/#">
                        Voir les annexes
                        </a>
                </section>
            </div>
        )
    }
}

export default Conclusion;