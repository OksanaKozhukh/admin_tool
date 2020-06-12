import React from 'react';
import Image from './component/img';
import Gallery from './component/gallery';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to Dogs Gallery</h1>
      </header>
      <Image />
      <Gallery />
    </div>
  );
}

export default App;
