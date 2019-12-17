import React, { Component } from 'react'; // importando o react
import './visualizeseuevento.css';
// import Header from '../../components/Header/Header';
// importando as coisas do botão$ npm run start
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';




class visualizeseuevento extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}


                <main className="main-crieseuevento">
                    <div className="formulario div-um">
                        <img src={require('../../assets/img/logo.png')} className="squareevents" alt="imagem de uma placa de madeira que é o simbolo da pagina" />

                        <h1 className="registro">Seu evento</h1>

                        <div className="father-div">
                            <div className="textinput-crieseuevento">
                                <p className="titulo-nome1">Nome do Evento: </p>
                                <form className="form-botao" action="#">
                                    <input type="text" className="botao-um" />
                                </form>
                            </div>

                            <div className="datetime-crieseuevento">
                                <p className="titulo-nome4">Data</p>
                                <form className="form-data" action="#">
                                    <input type="date" />
                                </form>

                                <p className="titulo-nome4">Hora</p>

                                <select name="hora-crieseuevento">
                                    <option value="setehoras">19h</option>
                                    <option value="oitohoras">20h</option>
                                </select>
                            </div>

                            <p className="titulo-nome2">Nome do Responsavel da Comunidade: </p>
                            <form className="form-botao" action="#">
                                <input type="text" className="botao-um" />
                            </form>

                            <p className="titulo-nome3">Nome da Comunidade </p>
                            <form className="form-botao" action="#">
                                <input type="text" className="botao-um" />
                            </form>

                            <p className="titulo-nome5">Contato </p>
                            <form className="form-botao" action="#">
                                <input type="number" className="botao-um" />
                            </form>
                        </div>

                        <h2 className="h2-detalhes-do-evento">Detalhes do Evento</h2>
                        <div className="formulario div-três">
                            <div className="salas-eventos">
                                {/* alterações da emily add o select da sala */}
                                <p className="titulo-nome5">Salas: </p>
                                <section className="alinhando-as-salas">
                                    <div class="sala-de-reuniao">
                                        <div class="view">
                                            <img src={require("../../assets/img/imagens_tw.jpg")} class="img-fluid" alt="placeholder" />
                                            <div class="mask flex-center waves-effect waves-light rgba-teal-strong">
                                                <div class="teste">
                                                    {/* teste */}
                                                    <div class="col-md-12 mb-4">
                                                        {/* botão de select sala */}
                                                        <button type="button" class="btn btn-success px-3"><i class="far fa-thumbs-up" aria-hidden="true"></i></button>
                                                        <p class="white-text">sala de reunião</p></div>
                                                </div>
                                                {/* teste */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* fim da sala de reunião */}

                                    <div class="lounge">
                                        <div class="view">
                                            <img src={require("../../assets/img/lounge_tw.jpg")} class="img-fluid" alt="placeholder" />
                                            <div class="mask flex-center waves-effect waves-light rgba-teal-strong">
                                                {/* botão de select sala */}
                                                <button type="button" class="btn btn-success px-3"><i class="far fa-thumbs-up" aria-hidden="true"></i></button>
                                                <p class="white-text">lounge</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* fim do lounge */}
                                {/* teste da imagem do evento */}
                                <p className="titulo-nome5">Escolha uma imagem para o seu evento: </p>
                                <div>
                                    <div class="view">
                                        <img src={require("../../assets/img/lounge_tw.jpg")} class="img-fluid" alt="placeholder" />
                                        <div class="mask flex-center waves-effect waves-light rgba-teal-strong">
                                            <p class="white-text">Imagem do evento</p>
                                            <button type="button" class="btn btn-link">Link</button>
                                        </div>
                                    </div>
                                </div>
                                {/* fim das alterações de sala da emily */}

                                {/* <form className="form-botao" action="#">
                                        <input type="number" className="botao-um" /> */}
                                {/* </form> */}
                            </div>

                            <div className="botoes-evento">
                                <p className="titulo-nome6">Interprete de libras? </p>

                                <div id="app-cover">
                                    <div className="row">
                                        <div className="toggle-button-cover">
                                            <div className="button-cover">
                                                <div className="button r" id="button-1">
                                                    <input type="checkbox" className="checkbox" />
                                                    <div className="knobs" />
                                                    <div className="layer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="titulo-nome7">Alimentação </p>
                            <div id="app-cover">
                                <div className="row">
                                    <div className="toggle-button-cover">
                                        <div className="button-cover">
                                            <div className="button r" id="button-1">
                                                <input type="checkbox" className="checkbox" />
                                                <div className="knobs" />
                                                <div className="layer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="titulo-nome9">Alguma restrição de Alimentação? </p>
                                <form className="form-botao" action="#">
                                    <input type="text" className="botao-um" placeholder="Comida Vegetariana? Sem Glúten? " />
                                </form>



                                <p className="titulo-nome10">Equipamentos </p>
                                <form className="form-botao" action="#">
                                    <input type="text" className="botao-um" placeholder="Microne? DataShow?" />
                                </form>
                                {/* alterações da emily */}
                                <p className="titulo-nome11">Presença </p>
                                <form className="form-botao" action="#">
                                    <input type="text" className="botao-um" placeholder="Link da rede que seus convidados confirmam presença Ex:Sympla" />
                                </form>
                                {/* Emily add um botão*/}
                                {/* importando botão do bdm */}
                                <button type="button" class="btn btn-yellow">Voltar</button>
                                {/* Fim da mudança do botão */}
                                {/* importando botão do bdm */}
                                <button type="button" class="btn btn-yellow">edite seu evento</button>
                                {/* Fim da mudança do botão */}
                            </div>
                        </div>
                    </div>

                    <div className="poligono-evento">

                    </div>

                    <div className="div-tres">
                        <img src={require("../../assets/img/18c7560356f85b006653f4a1280a3297.jpg")} className="banner-1" alt="" />
                    </div>
                </main>
            </div>

        );
    }
}
export default visualizeseuevento;