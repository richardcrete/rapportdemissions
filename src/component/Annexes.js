import React from "react";
import annexe1 from '../img/annexe1.PNG';
import annexe2 from '../img/annexe2.PNG';
import annexe3 from '../img/annexe3.PNG';
import annexe4 from '../img/annexe4.PNG';
import annexe5 from '../img/annexe5.PNG';
import annexe6 from '../img/annexe6.PNG';
import annexe7 from '../img/annexe7.PNG';
import annexe8 from '../img/annexe8.PNG';
import annexe9 from '../img/annexe9.PNG';
import annexe10 from '../img/annexe10.PNG';
import annexe11 from '../img/annexe11.PNG';
import annexe12 from '../img/annexe12.PNG';

class Annexes extends React.Component {
    render() {
        return (
            <div>
                <div className="pagegarde">
                    <div className="wrapper">
                        <h1>Rapport de missions</h1>
                        <h2>Annexes</h2>
                        <a className="next" href="/#annexes-link">
                            Voir les annexes
                        </a>
                    </div>
                </div>
                <section id="annexes-link">
                    <div className="wrapper-annexes">
                        <h2 className="h2">Toutes les annexes</h2>
                        <img src={annexe1} alt=""></img>
                        <p className="legend">Annexe 1 : Toutes les fonctionnalités du thème Avada</p>
                        <br></br>
                        <img src={annexe2} alt=""></img>
                        <p className="legend">Annexe 2 : La loupe de Biodesiv placée à gaughe du menu</p>
                        <br></br>
                        <img src={annexe3} alt=""></img>
                        <p className="legend">Annexe 3 : Le formulaire de contact de Biodesiv fait en CSS</p>
                        <br></br>
                        <img src={annexe4} alt=""></img>
                        <p className="legend">Annexe 4 : Le menu de Mamaka écarté</p>
                        <br></br>
                        <img src={annexe5} alt=""></img>
                        <p className="legend">Annexe 5 : Les filtres de Mamakya redesignés</p>
                        <br></br>
                        <img src={annexe6} alt=""></img>
                        <p className="legend">Annexe 6 : Ajout de produits sur Mamakya et Logissain via Woocommerce</p>
                        <br></br>
                        <img src={annexe7} alt=""></img>
                        <p className="legend">Annexe 7 : Une page optimisée pour Logissain</p>
                        <br></br>
                        <img src={annexe8} alt=""></img>
                        <p className="legend">Annexe 8 : Le Mega Menu de Mamakya</p>
                        <br></br>
                        <img src={annexe9} alt=""></img>
                        <p className="legend">Annexe 9 : Le widget pour créer un Mega Menu</p>
                        <br></br>
                        <img src={annexe10} alt=""></img>
                        <p className="legend">Annexe 10 : Le menu de Mamakya en version mobile</p>
                        <br></br>
                        <img src={annexe11} alt=""></img>
                        <p className="legend">Annexe 11 : Le script pour les filtres sur le site de Mamakya</p>
                        <br></br>
                        <img src={annexe12} alt=""></img>
                        <p className="legend">Annexe 12 : Le Feed Instagram pour Mamakya</p>
                        <br></br>
                    </div>
                </section>
            </div>
        )
    }
}

export default Annexes;