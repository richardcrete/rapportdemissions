import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            intro : 'intro',
        }
    }

    render() {
        return (
            <header>
                <p>Richard Crété - Rapport de missions</p>

                <nav>
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
                        Partie 1 - Wordpress
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
}

export default Header;