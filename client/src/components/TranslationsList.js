import React, { Component } from 'react';
import Client from '../client/Client'
import WordsPlayer from './WordsPlayer';

class TranslationsList extends Component {
  state = {
    translationsList: {},
  }

  componentDidMount() {
    Client.translationsList(this.props.id, (translationsList) => {
      this.setState({
        translationsList: translationsList
      })
    })
  }

  isStatePresent() {
    const obj = this.state.translationsList;
    return Object.keys(obj).length != 0 || obj.constructor != Object;
  }

  selectForeigns(translationsList) {
    return translationsList.map((translation) => { return translation.foreign_word.replace(' ','_'); });
  }

  selectTranslations(translationsList) {
    return translationsList.map((translation) => { return translation.translation_word.replace(' ','_'); });
  }

  render() {
    let words = [];
    if(this.isStatePresent()) {
      if (this.props.foreigns) {
        words = this.selectForeigns(this.state.translationsList.translations);
      } else {
        words = this.selectTranslations(this.state.translationsList.translations)
      }
    }
    return (
      <WordsPlayer
        words={words}
      />
    );
  }
}

export default TranslationsList;