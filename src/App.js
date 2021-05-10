import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';

import "./assets/index.css";

class App extends Component {

  constructor(){
    super();    
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }   
    this.setState(novoEstado);  
  }

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col">    
            <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          </div> 
          
          <div className="col maximo">
            <div className="row">
              <ListaDeNotas notas={this.state.notas}/>
            </div>
          </div>
        </div>
      </div>
    );

  }
  
}

export default App;
