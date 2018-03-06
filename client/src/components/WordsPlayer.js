import React, { Component } from 'react';
import Client from './Client';
import Spritz form '../spritz/Spritz'
import '../spritz/Spritz.css';

class WordsPlayer extends Component {
  const WORDS_PER_MINUTE = 200

  componentDidMount() {
    Client.translationsList(this.props.id, (translationsList) => {
      let words;
      if (this.props.foreigns) {
        words = this.selectForeigns(translationsList);
      } else {
        words = this.selectTranslations(translationsList)
      }
      Spritz.spritzify(words.join(' '), '#spritz_here', WORDS_PER_MINUTE);
    });
  }

  selectForeigns(translationsList) {
    translationsList.map((translation) => { return translation.foreign_word; });
  }

  selectTranslations(translationsList) {
    translationsList.map((translation) => { return translation.translation_word; });
  }

  render() {
    return (
      <div id="container">
        <div id="guide_top">
          ――――――――――<span id="notch">ф</span>―――――――――――
        </div>
          <div id="spritz_here"\>
        <div id="guide_bottom">
          ――――――――――――――――――――――
        </div>
      </div>
    );
  }
}