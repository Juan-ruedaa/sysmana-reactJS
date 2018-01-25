import React, { Component } from 'react'
import Nota from '../components/Nota'

class NotasList extends Component {
    render() {
        return (
            <div id="containerViewNotas">
                {this.props.notas.map(function (u, index) {
                    if (u.validado) {
                        return (
                            <Nota
                                key={index}
                                titulo={u.titulo}
                                tarea={u.tarea}
                            />
                        );
                    }
                    return false;
                })}
            </div>
        );
    }
}

export default NotasList;