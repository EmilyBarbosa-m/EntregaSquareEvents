import React,{Component} from 'react';


class adminaprova extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEventos: [],
      nomeEvento: '',
      dataEvento: '',
      horaEvento: '',
      StatusEvento:''
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

  render (){
    return (
      <main className="adm">
        <h1>Administrador</h1>
        <h2 className="titulo-admin">Propostas de eventos</h2>
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
                    <td><button type="button" class="btn btn-warning btn-rounded">Aprovar{evento.StatusEvento}</button>
                    <button type="button" class="btn btn-danger btn-rounded">Recusar{evento.StatusEvento}</button>
                    <button type="button" class="btn btn-success btn-rounded">E-mail</button></td>
                   
                   </tr>

);//fim do retorno

}.bind(this))
}           

        </table> 
</main>
    );
  }
}
  
  export default adminaprova;
  