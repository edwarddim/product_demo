import React from 'react';
import {Router} from "@reach/router"

import DetailComponent from './components/DetailComponent'
import AppComponent from './components/AppComponent'
import UpdateComponent from './components/UpdateComponent'

function App() {
  return (
    <div className="container">
      <Router>
        <AppComponent path="/" />
        <DetailComponent path="/:id" />
        <UpdateComponent path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
