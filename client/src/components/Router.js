import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import TranslationsList from './TranslationsList';
import TranslationsListLearn from './TranslationsListLearn';

const Router = () => {
  return (<Switch>
      <Route exact path='/' render={() => (
        <StartPage/>
      )} />
      <Route
        path='/translations_lists/learn/:translationsListId'
        render={({ match }) => (
          <TranslationsListLearn 
            id={match.params.translationsListId}
          />
      )} />
      <Route
        path='/translations_lists/foreigns/:translationsListId'
        render={({ match }) => (
          <TranslationsList 
            id={match.params.translationsListId}
            foreigns={true}
          />
      )} />
      <Route
        path='/translations_lists/translations/:translationsListId'
        render={({ match }) => (
          <TranslationsList 
            id={match.params.translationsListId}
            foreigns={false}
          />
      )} />
  </Switch>);
};

export default Router;