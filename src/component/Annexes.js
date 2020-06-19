import React from "react";
import annexe1 from '../img/annexe1.PNG';
// import annexe2 from '../img/annexe2.PNG';
// import annexe3 from '../img/annexe3.PNG';
// import annexe4 from '../img/annexe4.PNG';
// import annexe5 from '../img/annexe5.PNG';
// import annexe6 from '../img/annexe6.PNG';
// import annexe7 from '../img/annexe7.PNG';
// import annexe8 from '../img/annexe8.PNG';
// import annexe9 from '../img/annexe9.PNG';
// import annexe10 from '../img/annexe10.PNG';
// import annexe11 from '../img/annexe11.PNG';
// import annexe12 from '../img/annexe12.PNG';

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
                        <p className="legend">Test</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Annexes;