import React from 'react';
import ReactFileReader from 'react-file-reader';
import Client from '../client/Client';

const handleFile = file => {
  return Client.createTranslationsList({ csv: file.base64 });
};

const CsvImporter = () => {
  return ( <ReactFileReader fileTypes={['.csv']} base64={true} multipleFiles={false} handleFiles={handleFile}>
    <button className='ui fluid button'>Import new list </button>
  </ReactFileReader>);
};

export default CsvImporter;