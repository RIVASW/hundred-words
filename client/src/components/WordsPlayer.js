import React, { Component } from 'react';
import Spritzer from '../spritzer/Spritzer'
import '../spritzer/Spritzer.css';

const WORDS_PER_MINUTE = 200;

class WordsPlayer extends Component {
  render() {
    const words = this.props.words;
    if(words.length !== 0) {
      let elem = document.getElementById('spritz_here');
      let spritz = new Spritzer(elem);
      spritz.render(words.join(' '), WORDS_PER_MINUTE);
    }
    return (<div className='row'>
      <div className='column'>
        <h1 id="spritz_here"/>
      </div>
    </div>);
  }
}

export default WordsPlayer;