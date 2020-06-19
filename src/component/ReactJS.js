import React from "react";

class ReactJS extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Partie 2 - ReactJS</h2>
                        <h3>Introduction et contexte<br></br>Formation en autonomie<br></br>Pair programming et exercies</h3>
                        <a className="next" href="/#avada">
                            Lire la Partie 1
                        </a>
                    </div>
                </div>
                <section id="avada" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Utilisation d'Avada</h2>
                        <p>WordPress est un CMS <span>permettant de créer un site vitrire ou une boutique en ligne facilement</span>.</p>
                        <p>Mobytic utilise depuis quelques années <span>le thème premium nomé Avada</span>, commercialisé par Theme Fusion. Ce thème permet de faire des sites facilement, <span>grâce à une gestion poussée du design d'un site.</span> <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#"> (Annexe 1)</a></p>
                        <p>Avada englobe aussi des plugins dont nous nous servons réguilièrement :</p>
                        <ul>
                            <li>WooCommerce</li>
                            <li>Contact Form 7</li>
                            <li>Slider Revolution</li>
                        </ul>
                        <p>Avada est un thème qui <span>gère énormément de fonctionnalités sans avoir besoin de coder</span>. En-tête, menus, pied de page, boutique, blog : tout est personnalisable, <a href="/#cssPersonnalisee">ou presque</a>.</p>
                        <p>Tout ce qui n'est pas gérable avec Avada est souvent <span>réalisé par nos soins, à la main, puis documenté</span>, pour que la démarche soit <span>réutilisée lors d'une autre demande d'un client</span>.</p>
                    </div>
                </section>
                <section id="cssPersonnalisee" className="sombre vh">
                    <div className="wrapper-section">
                        <h2 className="h2">CSS personnalisée</h2>
                        <p>Malgré tout ce que peut faire Avada, les clients ont parfois <span>des demandes très précises</span> qui nécéssitent l'intervention de CSS personnalisée.</p>
                        <p>Le client Biodesiv souhaitait <span>voir la loupe de recherche à gauche dans le menu</span>, ce qu'on ne peut pas configurer dans Avada. J'ai donc ajouté de la CSS personnalisée <span>en sélectionnant l'id de l'élément loupe du menu, puis en le replaçant</span>. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 2)</a></p>
                        <p>Le client Mamakya souhaitait <span>un espace plus grand entre deux éléments de son menu</span>. Comme pour Biodesiv, <span>j'ai sélectionné l'élément du menu, puis je l'ai écarté</span>. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 3)</a></p>
                        <p>Pour Mamakya, <a href="/#filtres">les filtres sur la page de la boutique</a> n'étaient pas très bien designés. <span>J'ai donc rajouté quelques lignes de CSS pour les rendre plus beaux</span>, en respectant la charte graphique du site. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 4)</a></p>
                        <p>Biodesiv souhaitait un formulaire de contact très précis. Pour arriver à un résultat ressemblant à la maquette, j'ai dû <span>ajouter des class aux champs du formulaire dans le plugin Contact Form 7</span>, puis en les stylisant avec du CSS. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 5)</a></p>
                        <p>Pour les deux cas précis que sont Mamakya et Biodesiv, <span>les clients voulaient un site multilingue</span>. Pour ce faire, nous avons utilisé le plugin WPML. <span>Ce plugin traduit tout</span>, jusqu'au nom des id ou des class des éléments HTML. J'ai donc du <span>faire pour chacun des clients une version française et une version anglaise du CSS</span>.</p>
                    </div>
                </section>
                <section id="pages" className="vh">
                    <div className="wrapper-section">
                        <h2 className="h2">Création de pages et de produits</h2>
                        <p><span>WordPress et le plugin WooCommerce permettent de créer produits</span>, que le client peut donc lui-même rentrer la main, c'est un avantage. Mais avant cela, il a fallu pour les clients Logissain et Mamakya que <span>je crée pour chacun une centaine de produits pour démarrer</span>, et donner envie au client de poursuivre. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 6)</a></p>
                        <p>Pour faire de <span>la mise en page</span>, c'est tout de suite plus compliqué pour le client, c'est pourquoi <span>nous nous en chargeons</span>.</p>
                        <p>Pour Logissain, <span>j'ai créé une dizaine de page sur des nuisibles, pour améliorer le SEO du site</span>, et pour montrer que le dératiseur était compétent pour beaucoup de nuisibles. <a id="annexes" onClick={(event) => { this.props.functionChooseChapter(event.target.id); }} href="/#">(Annexe 7)</a></p>
                        <p>Nous avons aussi travaillé <span>les pages d'accueil de tous nos clients, la page la plus importante</span> pour que l'utilisateur ai envie de rester sur le site.</p>
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