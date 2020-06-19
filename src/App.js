import React from 'react';
import Header from './component/Header';
import Accueil from './component/Accueil';
import Intro from './component/Intro';
import Wordpress from './component/Wordpress';
import ReactJS from './component/ReactJS';
import Conclusion from './component/Conclusion';

import Annexes from './component/Annexes';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chapter: 'accueil',
    }
  }

  render() {
    return (
      <div className="App">
        <Header active={this.state.chapter} functionChooseChapter={this.chooseChapter} />
        <main>
          {this.displayChapter()}
        </main>
      </div>
    );
  }

  chooseChapter = (newChapter) => {
    if (newChapter) {
      this.setState({ chapter: newChapter })
    }
  }

  displayChapter() {
    if (this.state.chapter === 'accueil') {
      return (<Accueil functionChooseChapter={this.chooseChapter} />);
    }
    if (this.state.chapter === 'intro') {
      return (<Intro functionChooseChapter={this.chooseChapter} />);
    }
    if (this.state.chapter === 'wordpress') {
      return (<Wordpress functionChooseChapter={this.chooseChapter} />);
    }
    if (this.state.chapter === 'react') {
      return (<ReactJS functionChooseChapter={this.chooseChapter} />);
    }
    if (this.state.chapter === 'conclusion') {
      return (<Conclusion functionChooseChapter={this.chooseChapter} />);
    }
    if (this.state.chapter === 'annexes') {
      return (<Annexes functionChooseChapter={this.chooseChapter} />);
    }
  }
}

export default App;
