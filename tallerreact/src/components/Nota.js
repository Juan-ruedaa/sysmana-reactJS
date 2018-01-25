import React, { Component } from 'react';

class Nota extends Component {
    handleOnDeleteNota(event) {
        event.preventDefault();

        console.log(this);
    }

    render() {
        return (
            <div className="nota" >
                <p className="tituloTarea">{this.props.titulo}</p>
                <p className="textoTarea">{this.props.tarea}</p>
                <div className="containerButton">
                    <button onClick={this.handleOnDeleteNota.bind(this)} className="btnBorrar">Borrar
                <figure className="backgroundEfect"></figure>
                    </button>
                </div>
            </div>
        );
    }
}

export default Nota;