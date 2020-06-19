import React from "react";
import logo_mobytic from '../img/logo_mobytic.com'
import annexe1 from '../img/annexe1.png';
import annexe2 from '/img/annexe2.png';
import annexe3 from '/img/annexe3.png';
import annexe4 from '/img/annexe4.png';
import annexe5 from '/img/annexe5.png';
import annexe6 from '/img/annexe6.png';
import annexe7 from '/img/annexe7.png';
import annexe8 from '/img/annexe8.png';
import annexe9 from '/img/annexe9.png';
import annexe10 from '/img/annexe10.png';
import annexe11 from '/img/annexe11.png';
import annexe12 from '/img/annexe12.png';


class Annexes extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Annexes</h2>
                        <h3>Introduction et contexte<br></br>Formation en autonomie<br></br>Pair programming et exercies</h3>
                        <a className="next" href="/#annexes">
                            Voir les annexes
                        </a>
                    </div>
                </div>
                <section id="annexes">
                    <div className="wrapper-section">
                        <img src={annexe1} alt=""></img>
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
            </div>
        )
    }
}

export default Annexes;