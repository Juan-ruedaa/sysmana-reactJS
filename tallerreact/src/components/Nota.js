import React, { Component } from 'react';

class Nota extends Component {
    render() {
        return (
            <div className="nota" >
                <p className="tituloTarea">{this.props.titulo}</p>
                <p className="textoTarea">{this.props.tarea}</p>
                <div className="containerButton">
                    <button className="btnBorrar">Borrar
                <figure className="backgroundEfect"></figure>
                    </button>
                </div>
            </div>
        );
    }
}

export default Nota;