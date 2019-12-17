//importando as configurações de estilo
import React, { Component } from 'react';

import './editeseuperfil.css'


//componetizando
class editeseuperfil extends Component {
    render(){
        return(
            
            <div>
                <main className="main-editeseuperfil">
                <div class="cont">
                <div class="second-column">


                    <h2 class="title title-second"> Edite seu perfil</h2>
              
                    <form class="form">
                        <label class="label-input" for="">
                            <i class="far fa-user icon-modify"></i>
                            <input type="text" placeholder="Atualize seu nome completo" />
                        </label>

                      <label class="label-input" for="">
                            <i class="far fa-user icon-modify"></i>
                            <input type="text-cmm" placeholder=" Nome da Comunidade" />
                        </label> 

                        <label class="label-input" for="">
                            <i class="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="Atualize o seu email" />
                        </label>

                        <label class="label-input" for="">
                            <i class="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Senha" />
                        </label>

                        <label class="label-input" for="">
                            <i class="fas fa-lock icon-modify"></i>
                            <input type="password" placeholder="Confirme sua senha" />
                        </label>


                        <button class="btn btn-second">Cadastre</button>
                    </form>
                </div>
            </div>

     
                </main>
            </div>
        );
    }
}
export default editeseuperfil;