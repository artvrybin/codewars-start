import React from 'react';
import './App.css';
// import PolymorphComponent from './components/polymorph';
import ForceUpdateComponent from './components/forceUpdate';
import Foo from './components/otherFoo';

function App() {
  return (
    <div className="App">
      {/*<PolymorphComponent />*/}
      {/*<ForceUpdateComponent/>*/}
      <Foo />
    </div>
  );
}

export default App;
