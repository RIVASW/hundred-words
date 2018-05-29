import React, { Component } from 'react';
import Client from '../client/Client'

class TranslationsListLearn extends Component {
  state = {
    translationsList: null,
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

  render() {
    let translationsTable = null;
    if(this.state.translationsList !== null) {
      translationsTable = this.state.translationsList.translations.map((translation, index) => (
        <tr>
          <td> {index+1}. {translation.foreign_word} </td>
          <td> {translation.translation_word} </td>
        </tr>
      ));
    }

    return (<div className='row'>
      <div className='column'>
        <table className='ui striped table'>
          {translationsTable}
        </table>
      </div>
    </div>);
  }
}

export default TranslationsListLearn;