import React from 'react';
import Header from './component/Header';
import Accueil from './component/Accueil';
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

  displayChapter(){
    console.log(this.state.chapter)
    if(this.state.chapter == 'accueil'){
      return(<Accueil />);
    }
    // if(this.state.chapter == 'intro'){
    //   <Intro />
    // }
  //   if(this.state.chapter == 'wordpress'){
  //     <Wordpress />
  //   }
  //   if(this.state.chapter == 'react'){
  //     <React />
  //   }
  //   if(this.state.chapter == 'conclusion'){
  //     <Conclu />
  //   }
  }
}
export default App;
