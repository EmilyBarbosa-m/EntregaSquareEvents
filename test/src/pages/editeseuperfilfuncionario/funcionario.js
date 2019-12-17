//importando as configurações de estilo
import React, { Component } from 'react';

import './funcionario.css'


//componetizando
class funcionarioperfil extends Component {
    render() {
        return (

            <div>
                <main className="main-funcionarioperfil">
                    <div class="cont">
                        <div class="second-column">


                            <h2 class="title title-second"> Seu perfil</h2>
                            <img className="foto_de_perfil" src={require("../../assets/img/foto_de_perfil_tw.jpg")} alt="foto de perfil do usuário administrador" />
                            <input type="file"></input>



                            <form class="form">
                                <label class="label-input" for="">
                                    <i class="far fa-user icon-modify"></i>
                                    <input type="text" placeholder="Seu nome" />
                                </label>

                                <label class="label-input" for="">
                                    <i class="far fa-user icon-modify"></i>
                                    <input type="text-cmm" placeholder=" Nome da comunidade" />
                                </label>

                                <label class="label-input" for="">
                                    <i class="far fa-envelope icon-modify"></i>
                                    <input type="email" placeholder="Seu email" />
                                </label>

                                {/* a ca vai fazer a função de ocultar senha caso de tempo */}
                                {/* <label class="label-input" for="">
                            <i class="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="sua senha" />
                        </label> */}



                                <button class="btn btn-second">Voltar</button>
                            </form>
                        </div>
                    </div>


                </main>
            </div>
        );
    }
}
export default funcionarioperfil;