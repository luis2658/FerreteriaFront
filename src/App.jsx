import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css';

import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"

import Producto from "./Components/producto.component"
import ProductoList from "./Components/producto-list.component"
import ProductoAdd from "./Components/producto-add.component"

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <div className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand">
              Ferreteria
            </a>
            <div className="navbar-nav mr-auto">              
                <li className="nav-item">                
                  <Link to={"/productos"} className="nav-link">
                  Productos
                  </Link>
                </li>
                <li className="nav-item">                
                  <Link to={"/agregar"} className="nav-link">
                  Agregar
                  </Link>
                </li>
            </div>        
          </div>

          <div className="container mt-3">
            <Switch>          
              <Route exact path={["/", "/productos"]} component={ProductoList} />
              <Route exact path="/agregar" component={ProductoAdd} />
              <Route exact path="/productos/:id" component={Producto} />              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
