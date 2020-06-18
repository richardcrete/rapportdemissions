import React from 'react';
import '../css/Header.css';

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <a
                        id="accueil" className="active"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="accueil">
                        Accueil
                    </a>
                    <a
                        id="intro"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="intro">
                        Introduction
                    </a>
                    <a
                        id="wordpress"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="wordpress">
                        Partie 1 - WordPress
                    </a>
                    <a
                        id="react"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="react">
                        Partie 2 - React
                    </a>
                    <a
                        id="conclusion"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="conclusion">
                        Conclusion
                    </a>
                </nav>
            </header>
        )
    }

    componentDidUpdate = () => {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('#' + this.props.active).classList.add('active');
    }

}

export default Header;