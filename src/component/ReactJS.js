import React from "react";

class ReactJS extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Partie 2 - ReactJS</h2>
                        <h3>Introduction et contexte<br></br>Formation en autonomie puis en pair programming</h3>
                        <a className="next" href="/#introduction">
                            Lire la Partie 2
                        </a>
                    </div>
                </div>
                <section id="introduction" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Introduction et contexte</h2>
                        <p>ReactJS est une librairie JavaScript qui se base sur la construction de composants.</p>
                        <p>Comme je l'ai expliqué dans sa présentation, Mobytic se tourne vers des projets innovants. Pour me former à cette nouvelle technologie et participer à l'évolution de l'entreprise, j'ai eu recours à plusieurs moyens pour apprendre à maitriser React.</p>
                        <p>J'en suis encore au point d'un apprentissage en profondeur, je n'ai donc pas de projet concret à montrer. C'est pourquoi ce rapport est réalisé avec cette technologie.</p>
                    </div>
                    <a className="next" href="/#autonomie">
                        Lire la suite
                    </a>
                </section>
                <section id="autonomie" className="sombre vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Formation en autonomie</h2>
                        <p>J'ai débuté l'apprentissage de ReactJS en autonomie grâce à un cours OpenClassrooms conseillé par Raphaël DE OLIVEIRA. J'ai pu apprendre les bases de la librairie grâce à un exercice pratique, un pendu.</p>
                        <p>Après ces quelques mois d'apprentissage tout seul, nous avons "profité" du confinement pour tester le pair programming avec Raphaël DE OLIVEIRA sur Discord. En général, la journée débutait par quelques heures de cours avant que je ne fasse quelques exercices inventés par mon collègue.</p>
                        <p>Ces deux moyens d'apprentissage m'ont permis de trailler mes recherches lorsque j'étais en autonomie, et la communication, la concordance dans le code pendant le pair programming.</p>
                    </div>
                    <a id="conclusion" onClick={(event) => {
                        this.props.functionChooseChapter(event.target.id);
                    }} className="next" href="/#">
                        Lire la conclusion
                        </a>
                </section>
            </div>
        )
    }
}

export default ReactJS;