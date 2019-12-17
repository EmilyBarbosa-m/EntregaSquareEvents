//importando as configurações de estilo
import React, { Component } from 'react';
import './redefinicaodesenha.css'


//componetizando
class redefinirsenha extends Component {
    render() {
        return (

            <div>
                <main className="main-redefinir-senha">
                    <div class="second-column">
                        <h2 class="title title-second">Esqueceu a sua senha?</h2>

                        <p class="description description-second">coloque o seu email para enviarmos a sua nova senha:</p>
                        <form class="form">

                            <label class="label-input" for="">
                                <i class="far fa-envelope icon-modify"></i>
                                <input type="email" placeholder="Digite o seu email" />
                            </label>

                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"></i>
                                <input type="senha" placeholder="Escreva a sua nova senha" />
                            </label>
                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"></i>
                                <input type="senha" placeholder="Reescreva a sua nova senha" />
                            </label>

                            <a class="password" href="#">Enviaremos a confirmação por email</a>
                            <button class="btn btn-second">Confirme</button>
                        </form>
                    </div>
                </main>
            </div>

        );
    }
}
export default redefinirsenha;
