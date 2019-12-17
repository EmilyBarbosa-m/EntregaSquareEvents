import React, { Component } from 'react';



class adminpadrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEventos: [],
      nomeEvento: '',
      dataEvento: '',
      horaEvento: '',
      condicaoEvento: false
    }
    this.buscarEvento = this.buscarEvento.bind(this);
  }


    componentDidMount(){
        this.buscarEvento();
    }

 //o que dá ínicio a todos os requisitos determinados na exibição 


    buscarEvento(){
      fetch('http://localhost:5000/api/Evento',{
        headers: {
          'Content-Type':'application/json; charset=utf-8'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ listaEventos: data })
      })
      .catch(error => console.log(error))
    }

    // apadrinharEvento =(evento,id)=> {
    //   event.preventDefault();
    //   console.log("evento aceito");
    //   // var usuario = getUserAuthenticated().id;
    //   // console.log("ID"+id);
    //   // console.log("usuario"+usuario);

    //   fetch ('http://localhost:5000/api/Evento'+idEvento ,
        
    //     {
    //       method:"PUT",
    //       body:JSON.stringify(this.state.evento)
    //      headers : {
    //       'Content-Type':'application/json;'
    //       .then(resposta => {
    //         console.log(resposta);
    //       }
    //       })
    //       .catch(error => console.error(error))
    //     }
    //   })
      
    // }

  
  render() {
  return (
    <main className="adm">
    <h1>Administrador</h1>
    <h2 className="titulo-admin">Esses eventos já foram aprovados,decida ser responsável por alguns</h2>
    <table>
    <thead>
    <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Descrição</th>
          <th>Funções</th>
        </tr>
        </thead>
        {
              this.state.listaEventos.map(function (evento) {
                return (

                  <tr key={evento.idEvento} >
                    <td>{evento.idEvento}</td>
                    <td>{evento.nomeEvento}</td>
                    <td>{evento.dataEvento}</td>
                    <td>{evento.horaEvento}</td>
                    <td>{evento.descricaoEvento}</td>
                    <td><button type="button" class="btn btn-warning btn-rounded">Apadrinhar{evento.condicaoEvento}</button></td>
                  </tr>

                );//fim do retorno

              }.bind(this))
            }
        </table>
        </main>
      );
  }
  
}
        
  export default adminpadrinho;
