import React, { Component } from 'react';
import CardNotas from '../CardNota';
import "./estilolista.css";


class ListaDeNotas extends Component {

    render(){
        return (
            <ul className="topo lista-notas">
                {this.props.notas.map((nota, index) => {
                return (
                    <li key={index} className="card-nota-titulo-semmarcador">
                        
                        <span className="card-nota-titulo" key={index}></span>
                        <CardNotas titulo={nota.titulo} texto={nota.texto} />
                    </li>
                );
            })}</ul>
        );
    }
}

export default ListaDeNotas;
