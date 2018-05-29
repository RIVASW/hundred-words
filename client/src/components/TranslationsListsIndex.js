import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Client from '../client/Client';
import TranslationsList from './TranslationsList';

class TranslationsListIndex extends Component {
  state = {
    translationsLists: [],
  };

  componentDidMount() {
    Client.translationsListIndex((translationsLists) => {
      this.setState({
        translationsLists: translationsLists
      });
    });
  }

  render() {
    const translationsListComponents = this.state.translationsLists.map((translationsList) => (
      <div className='ui four item compact menu'>
        <div className='header item'>
          {translationsList.name}
        </div>
        <NavLink
          to={`translations_lists/foreigns/${translationsList.id}`}
          className='item'
          key={translationsList.id}
        >
          En
        </NavLink>
        <NavLink
          to={`translations_lists/translations/${translationsList.id}`}
          className='item'
          key={translationsList.id}
        >
          Ru
        </NavLink>
        <NavLink
          to={`translations_lists/learn/${translationsList.id}`}
          className='item'
          key={translationsList.id}
        >
          List
        </NavLink>
      </div>
    ));

    return (<div className='ui segment'>
      <h2 className='center aligned ui header'>
        Lists index
      </h2>
      {translationsListComponents}
      </div>
    );
  }
}

export default TranslationsListIndex;