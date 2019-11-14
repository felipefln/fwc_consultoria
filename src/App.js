import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Sobre from './components/Sobre';
import HistoricoEscolar from './components/Escolar';
import HistoricoProfissional from './components/Profissional';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route path='/' exact component={Header}/>
          <Route path='/sobre' exact component={Sobre}/>
          <Route path='/escolar' exact component={HistoricoEscolar}/>
          <Route path='/profissional' exact component={HistoricoProfissional}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
