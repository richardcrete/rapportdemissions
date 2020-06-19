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
                            
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="/#">
                        Accueil
                    </a>
                    <a
                        id="intro"
                        onClick={(event) => {
                            
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="/#">
                        Introduction
                    </a>
                    <a
                        id="wordpress"
                        onClick={(event) => {
                            
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="/#">
                        Partie 1 - WordPress
                    </a>
                    <a
                        id="react"
                        onClick={(event) => {
                            
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="/#">
                        Partie 2 - React
                    </a>
                    <a
                        id="conclusion"
                        onClick={(event) => {
                            
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="/#">
                        Conclusion
                    </a>
                    <a
                        id="annexes"
                        onClick={(event) => {
                            
                            this.props.functionChooseChapter(event.target.id);
                        }}
                        href="/#">
                        Annexes
                    </a>
                </nav>
            </header>
        )
    }

    componentDidUpdate = () => {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('/#' + this.props.active).classList.add('active');
    }

}

export default Header;