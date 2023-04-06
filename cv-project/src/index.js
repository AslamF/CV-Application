import React from 'react';
import ReactDOM from 'react-dom/client';
import General from './components/general';
import Education from './components/education';
import Work from './components/work';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <General />
    <Education />
    <Work />

  </React.StrictMode>
);

