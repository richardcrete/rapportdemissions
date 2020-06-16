import React from 'react';
import Header from './component/Header';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chapter: 'intro',
    }
  }

  render() {
    return (
      <div className="App">
        <Header functionChooseChapter={this.chooseChapter} />
        {this.displayChapter}
      </div>
    );
  }

  chooseChapter = (newChapter) => {
    if (newChapter) {
      this.setState({ chapter: newChapter })
    }
  }

  displayChapter(){
    if(this.state.chapter == 'intro'){
      <Intro />
    }
    if(this.state.chapter == 'wordpress'){
      <Wordpress />
    }
    if(this.state.chapter == 'react'){
      <React />
    }
    if(this.state.chapter == 'conclusion'){
      <Conclu />
    }
  }
}
export default App;
