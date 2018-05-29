import React, { Component } from 'react';
import TranslationsListsIndex from './TranslationsListsIndex';
import CsvImporter from './CsvImporter';

const StartPage = () => {
  return (<div className = 'row'>
    <div className='column'>
      <TranslationsListsIndex/>
      <CsvImporter/>
    </div>
  </div>);
};

export default StartPage;