import React from 'react';
import ImageViewer from './ImageViewer';
import './index.css';

const App = () => {
  const images = [
    '/Images/1.avif',
    '/Images/2.avif',
    '/Images/3.avif',
    '/Images/4.avif',
    '/Images/5.avif',
    '/Images/6.avif',
    '/Images/7.avif',
    '/Images/8.avif'
  ];

  return (
    <div className="App">
      <ImageViewer images={images} />
    </div>
  );
};

export default App;
