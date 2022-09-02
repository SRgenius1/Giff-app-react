import './App.css';
import React from 'react';
import { ListOfGifs } from './Components/ListOfGifs';
import { Home } from './Routes/Home';
import {Link, Route} from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <h4>Back to home</h4>
          <img className='home-gif' src='https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1468243272/content-items/001/663/562/casacoche-original.gif?1468243272' alt="home"/>
        </Link>
        <Home/>
        <Route path='/search/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
};

export default App;
