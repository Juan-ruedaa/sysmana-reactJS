import React, { Component } from 'react';
import '../assets/index.css';
import NotasList from '../components/NotasList';
import NotasForm from '../components/NotasForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [
        { titulo: "Preparar Symana 2017-18", tarea: "¡Ésta Sysmana va a ser la mejor!" },
        { titulo: "Hacer tarea BBDD", tarea: "La mejor asignatura de todas :)" },
        { titulo: "Llamar a mi madre", tarea: "Que siempre se me olvida." },
      ]
    };
  }

  handleOnAddNota(event) {
    event.preventDefault();
    let nota = {
      titulo: event.target.titulo.value,
      tarea: event.target.tarea.value,
    };
    this.setState({
      notas: this.state.notas.concat([nota])
    });
  }

  handleOnDeleteNota(event) {
    //console.log(event.target.className)
    //this.state.notas.splice(0,1);
    //this.setState({
    //  notas: this.state.notas
    //});
    console.log(this)
  }

  render() {
    return (
      <main id="main">
        <NotasForm onAddNota={this.handleOnAddNota.bind(this)} />

        <section id="sectionViewNotas">
          <NotasList notas={this.state.notas} onClick={(event) => {this.handleOnDeleteNota}} />
        </section>
      </main>
    );
  }
}

export default App;
