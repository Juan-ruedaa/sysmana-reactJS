import React, { Component } from 'react'

export default class NotasForm extends Component {
    render() {
        return (
            <section id="containerForm">
            <form onSubmit={this.props.onAddNota}>
                <p id="titleGestorNotas">Gestor de notas</p>
                <div id="containerInsideForm">
                    <p className="titleInput">Buscar nota</p>
                    <div className="containerInput">
                        <input id="buscar" type="text" placeholder="Buscar" name="buscar"/>
                    </div>
                    <div id="containerCreateform">
                        <figure className="bar_division"></figure>
                        <p className="titleInput">Crear nota</p>
                        <div className="containerInput">
                            <input id="titulo" type="text" placeholder="Título" name="titulo" />
                            <img className="errorForm" src="img/warning.svg" title="Titulo vacío" alt="" />
                        </div>
                        <div className="containerInput">
                            <textarea id="inputTexto" placeholder="Texto" name="tarea"></textarea>
                            <img className="errorForm" src="img/warning.svg" title="Texto vacío" alt="" />
                        </div>
                        <button id="buttonCrear">Crear</button>
                    </div>
                </div>
                </form>
            </section>
        );
    }
}