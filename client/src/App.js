import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import Client from './Client';
import './App.css';

class App extends Component {
  render() {
    return (
      <Route exact path='/' render={() => (
        <TranslationsListList/>
      )} />
    );
  }
}

class TranslationsListList extends Component {
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
      <div className='ui secondary vertical menu'>
        <NavLink
          to={`translations_lists/${translationsList.id}`}
          className='item'
          key={translationsList.id}
        >
         {translationsList.name}
        </NavLink>
      </div>
    ));

    return (
      <div className = 'ui unstackable items'>
        {translationsListComponents}
      </div>
    );
  }
}

export default App;
