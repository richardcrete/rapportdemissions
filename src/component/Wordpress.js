import React from "react";

class Wordpress extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Partie 1 - Wordpress</h2>
                        <h3>Utilisation d'un thème premium<br></br>Personnalisation d’un thème par la CSS personnalsée<br></br>Création de pages et des produits<br></br>Construction de Mega Menu<br></br>Paramétrage et personnalisation de Filtres WooCommerce en AJAX<br></br>Intégration d’un Feed Instagram SANS plugin</h3>
                        <a className="next" href="/#avada">
                            Lire la Partie 1
                        </a>
                    </div>
                </div>
                <section id="avada" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Utilisation d'un thème premium</h2>
                        <p>WordPress est un CMS permettant de créer un site vitrine ou une boutique en ligne. Wordpress est le leader mondial des CMS en terme de sites déployés toutes catégories confondues.</p>
                        <p>Ce moteur de site de référence utilise des thèmes pour fonctionner. Les thèmes sont soit gratuits, soit payants (premium), soit custom.</p>
                        <p>Mobytic utilise depuis quelques années le thème premium nommé Avada, commercialisé par Theme Fusion. Ce thème permet de faire des sites de qualité dans un délais court, grâce à une gestion poussée du design d'un site. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#"> (Annexe 1)</a></p>
                        <p>Avada englobe aussi des plugins dont nous nous servons réguilièrement :</p>
                        <ul>
                            <li>WooCommerce</li>
                            <li>Contact Form 7</li>
                            <li>Slider Revolution</li>
                        </ul>
                        <p>Avada est un thème qui <span>gère énormément de fonctionnalités nativement</span> ce qui ne demande une intervention en développement que pour un travail de détail. En-tête, menus, pied de page, boutique, blog : tout est personnalisable, <a href="/#cssPersonnalisee">ou presque</a>.</p>
                        <p>Tout ce qui n'est pas gérable avec Avada est souvent <span>réalisé par nos soins, à la main, puis documenté</span>, pour que la démarche soit <span>réutilisée si un client apporte un besoin similaire dans le futur.</span>.</p>
                    </div>
                    <a className="next" href="/#cssPersonnalisee">
                        Lire la suite
                    </a>
                </section>
                <section id="cssPersonnalisee" className="sombre vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Personnalisation d’un thème par la CSS personnalsée</h2>
                        <p>Malgré tout ce que peut faire Avada, les clients ont parfois <span>des demandes très précises</span> qui nécéssitent l'intervention de CSS personnalisée.</p>
                        <p>Le client Biodesiv par exemple souhaitait voir la loupe de recherche à gauche dans le menu, ce qu'on ne peut pas configurer dans Wordpress car il est admis que la loupe se positionne à droite. J'ai donc ajouté de la CSS personnalisée en sélectionnant l'id de l'élément loupe du menu, puis en le replaçant. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 2)</a></p>
                        <p>Biodesiv a transmis un besoin très précis sur le plan du design. Je suis intervenu sur plusieurs choses dans le site et particulièrement sur le formulaire de contact. Pour arriver à un résultat ressemblant à la maquette, j'ai dû ajouter des class aux champs du formulaire dans le plugin Contact Form 7, puis en les stylisant avec du CSS. (Annexe 5) <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 3)</a></p>
                        <p>Le client Mamakya souhaitait un espace plus grand entre deux éléments de son menu. Comme pour Biodesiv, j'ai sélectionné l'élément du menu, puis je l'ai écarté. (Annexe 3) <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 4)</a></p>
                        <p>Pour Mamakya, les filtres sur la page de la boutique disposaient d’une présentation basique alors que la demande de la cliente était plus qualitative. J’ai pris en charge la refonte totale de la CSS du système de filtrage pour les rendre conformes à la demande, en respectant la charte graphique du site. (Annexe 4) <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 5)</a></p>
                        <p>Pour les deux cas précis que sont Mamakya et Biodesiv, les clients voulaient un site multilingue. Pour ce faire, nous avons utilisé le plugin WPML. Ce plugin traduit tout, jusqu'au nom des id ou des class des éléments HTML. J'ai donc du faire pour chacun des clients une version française et une version anglaise du CSS. Ces versions sont indépendantes et on pourrait envisager des différences de style selon la langue choisie.</p>
                    </div>
                    <a className="next" href="/#pages">
                        Lire la suite
                    </a>
                </section>
                <section id="pages" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Création de pages et de produits</h2>
                        <p>WordPress associé au plugin WooCommerce permettent de créer produits vendables en ligne, que le client formé peut lui-même rentrer la main, c'est un avantage. Mais avant cela, il a fallu pour les clients Logissain (Client web de Mobytic spécialisé dans la lutte anti-nuisibles) et Mamakya créer pour chacun une centaine de produits pour démarrer, et donner envie au client de poursuivre. Cette gestion de projet inclus le client dans le processus de développement et gagne un temps précieux à l’agence. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 6)</a></p>
                        <p>Pour faire de la mise en page, c'est tout de suite plus compliqué pour le client, il est rarement autonome sur ce point. C'est Mobytic qui assure cette tâche qui relève logiquement du développement.</p>
                        <p>Pour Logissain, j'ai créé une dizaine de page sur des nuisibles, pour améliorer le SEO du site, et pour montrer que le dératiseur était compétent pour beaucoup de nuisibles. Chaque page est optimisée pour le référencement, un travail SEO dans le détail consistait à valider un certain volume de texte, une densité de mots clefs, les balises alt, les balises méta ainsi que l’optimisation des images etc. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 7)</a></p>
                        <p>Nous avons aussi travaillé les pages d'accueil de tous nos clients, la page la plus importante pour que l'utilisateur ai envie de rester sur le site. Les pages d’accueil sont toujours très travaillées dans l’agence et j’ai été missionné sur ces sujets afin d’aboutir à une navigabilité optimale.</p>
                    </div>
                    <a className="next" href="/#megamenu">
                        Lire la suite
                    </a>
                </section>
                <section id="megamenu" className="sombre vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Construction de Mega Menu</h2>
                        <p>Parmi ses fonctionnalités, Avada propose de faire des "Mega Menus". J'ai beaucoup travaillé cette fonctionnalité, puisqu'elle est très importante dans le ressenti qu’a l’internaute lors de sa visite.</p>
                        <p>Le Mega Menu permet d'afficher beaucoup de liens pour filtrer les produits par catégories, lorsqu'ils sont nombreux sur le site. On l’utilise donc logiquement pour des projets E-commerce. L’enjeux est réel car la quantité d’information doit permettre à l’utilisateur de trouver rapidement son chemin. Comme me l’a souvent répété Nicolas : « Le but d’un site e-commerce, c’est de vendre » <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 8)</a></p>
                        <p>Pour réaliser un Mega Menu, il faut d'abord créer les produits et les catégories en organisant dès le départ une arborescence professionnelle. Il faut ensuite lier au menu de WordPress des widgets dans lesquels se trouveront des liens vers les catégories de produits. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 9)</a></p>
                        <p>C'est une tâche fastidieuse, qui prend quelques jours à faire et l’organisation préalable est un point clé. Il faut en plus adapter ce menu aux écrans mobiles en créant un nouveau menu spécifique aux smartphones (entendons ici un double travail pour chaque menu qu’il faut également prendre en compte. Dans le cas d’un site multi-lingue, ce travail est encore doublé pour chaque langue…). <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 10)</a></p>
                        <p>Dans les prochaines semaines, j'aurais à reproduire cette tâche pour d'autres sites internet. Cela faire l’objet d’un processus dans l’entreprise. La méthode est notée, commenté pour aller plus vite la prochaine fois et transmettre à d’autres collègues.</p>
                    </div>
                    <a className="next" href="/#filtres">
                        Lire la suite
                    </a>
                </section>
                <section id="filtres" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Paramétrage et personnalisation de Filtres WooCommerce en AJAX</h2>
                        <p>Les filtres par défaut de WordPress sont assez restreints et par défaut le résultat n’est pas à la hauteur des attentes des clients. Dans ce contexte,  nous utilisons un plugin nommé BeRocket, qui permet de filtrer les produits de la boutique en AJAX, sans avoir à recharger la page. Le plugin met à disposition une console dédiée aux développeurs afin de customiser finement le rendu des filtres.</p>
                        <p>Comme pour les Mega Menus, mettre des filtres en place demande une réflexion préalable. Il faut tout d'abord ajouter les catégories que l'on souhaite dans le filtre, puis lier le filtre à un widget, avant de lier le widget à une sidebar.</p>
                        <p>Je suis très fier de cette fonctionnalité car elle solutionne une problématique très souvent remontée sur les forums US quand un client veut disposer de filtres propres à chaque page plutôt que d’avoir uniquement les filtres par défaut.  <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 11)</a></p>
                    </div>
                    <a className="next" href="/#feedInstagram">
                        Lire la suite
                    </a>
                </section>
                <section id="feedInstagram" className="sombre vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Feed Instagram</h2>
                        <p>Mamakya souhaitait avoir sur sa page d'accueil, un feed Instagram. Une problématique sur Wordpress est bien la multiplication des plugins pour pratiquement tout. Cette situation est délicate à plusieurs point de vue : </p>
                        <ul>
                            <li>Sécurité</li>
                            <li>Maintenance</li>
                            <li>Budget dans le cadre de l’achat d’un plugin payant</li>
                            <li>Liberté de présentation</li>
                        </ul>
                        <p>Pour éviter d'utiliser un plugin payant, ou gratuit mais en proposant pas beaucoup de fonctionnalités, j'ai proposé en sur mesure un feed Instagram en HTML et en JavaScript. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 12)</a></p>
                        <p>Mon script récupère grâce au nom d'utilisateur les quatre dernières photos du feed Instagram au chargement de la page. J'ai ensuite importé le code via un widget sur la page d'accueil. Le résultat est conforme à la demande du client SANS plugin et nous pouvons customiser ce feed à l’envie !</p>
                    </div>
                    <a id="react" onClick={(event) => {
                        this.props.functionChooseChapter(event.target.id);
                    }} className="next" href="/#">
                        Lire la Partie 2
                        </a>
                </section>
            </div>
        )
    }
}

export default Wordpress;