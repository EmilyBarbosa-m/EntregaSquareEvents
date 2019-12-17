
import React from 'react';
import './login.css';
import api from '../../services/api'
import { ParseJwt } from '../../services/auth'
// import Header from '../../components/Header/Header'



class Login extends React.Component {
    constructor(props) { //metodo construtor
        super(props);
        this.state = {
            email: '',
            senha: '',



            // postLogin: {
            //     email: "", //inserir email
            //     senha: "", //inserir senha
            //     errorSms: "", //mensagem de erro
            //     isLoading: false //carregamento
            // },


            nomeCadastro: "",
            comunidadeCadastro: "",
            emailCadastro: "",
            senhaCadastro: "",
            confirmarCadastro: "",

        }
        this.DoLogin = this.DoLogin.bind(this);
    }
    //LOGIN
    UpdateLoginEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    UpdateLoginSenha = (event) => {
        this.setState({ senha: event.target.value });

    }
    //CADASTRO

    UpdateCadastroNome = (event) => {
        this.setState({ nomeCadastro: event.target.value });
    }

    UpdateCadastroComunidade = (event) => {
        this.setState({ comunidadeCadastro: event.target.value });
    }

    UpdateCadastroEmail = (event) => {
        this.setState({ emailCadastro: event.target.value });
    }

    UpdateCadastroSenha = (event) => {
        this.setState({ senhaCadastro: event.target.value });
    }

    // UpdateCadastroConfirmar = (event) => {
    //     this.setState({ confirmarCadastro: event.target.value });
    // }



    //FIM
    DoLogin(event) {
        event.preventDefault();
        console.log('Realizar Login')
        this.setState({ erroMensagem: '' })

        this.setState({ isLoading: true })

        let usuario = {
            email: this.state.email,
            senha: this.state.senha
        }
        console.log(usuario)

        api.post('/Login', usuario)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-squareevents', response.data.token)
                    this.setState({ isLoading: false })

                    console.log('Meu token é' + response.data.token)

                    var base64 = localStorage.getItem('usuario-squareevents').split('.')[1]

                    console.log(base64)

                    console.log(window.atob(base64))

                    console.log(ParseJwt().Role)

                    if (ParseJwt().Role === 'Administrador') {
                        this.props.history.push('/crieseuevento')
                    }
                    else {
                        this.props.history.push('/home');
                    }

                }
            })

            .catch(erro => {
                console.log("Erro: ", erro)
                this.setState({ erroMensagem: 'E-mail ou senha inválidos!' })
                this.setState({ isLoading: false })
            })
    }

    //CADASTRO



    postCadastro = (e) => {
        e.preventDefault(); //prevensão das coisas da paginas
        
        console.log (this.state.nomeCadastro)
        console.log (this.state.emailCadastro)
        console.log (this.state.senhaCadastro)
        console.log (this.state.confirmarCadastro)



        api.post('/usuario', {  nomeUser: this.state.nomeCadastro, Senha: this.state.senhaCadastro, Email: this.state.emailCadastro })
        .then(response =>  { 
            if (response.status == 200){
                alert("usuario cadastrado com sucesso")
            }
            })

            .catch(error => {
                console.log(error);
                this.setState({ erroMensagem: '' });
            })
    }


    render() {
        return (
            <div>
                <div className="div_tudo">

                    {/* <Header /> */}

                    {/*CADASTRO INICIO*/}

                    <div className="cont">
                        <div className="second-column">
                            <h2 className="title title-second">Se cadastre</h2>
                            <p className="description description-second">e faça teu evento gratuito conosco!</p>
                            <div className="form" >

                                <form onSubmit={this.postCadastro}>
                                    <label className="label-input" for="">
                                        <i className="far fa-user icon-modify"></i>
                                        <input type="text" placeholder="Nome Completo" onChange={this.UpdateCadastroNome}/>
                                    </label>

                                    {/* <label className="label-input" for="">
                                        <i className="far fa-user icon-modify"></i>
                                        <input type="text-cmm" placeholder=" Nome da Comunidade" />
                                    </label> */}

                                    <label className="label-input" for="">
                                        <i className="far fa-envelope icon-modify"></i>
                                        <input type="email" placeholder="Email" onChange={this.UpdateCadastroEmail} />
                                    </label>

                                    <label className="label-input" for="">
                                        <i className="fas fa-lock icon-modify"></i>
                                        <input type="password" placeholder="Senha" onChange={this.UpdateCadastroSenha} />
                                    </label>

                                    {/* <label className="label-input" for="">
                                        <i className="fas fa-lock icon-modify"></i>
                                        <input type="password" placeholder="Confirme sua senha"  onChange={this.UpdateSenha}/>
                                    </label> */}

                                    <button type="submit" className="btn btn-second">Cadastre</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    {/* CADASTRO FIM*/}







                    <div className="second-column">
                        <h2 className="title title-second">Faça seu login aqui</h2>

                        <p className="description description-second">Não possui cadastro? Faça aqui agora</p>
                        <div className="form" >
                            <form>

                                <label className="label-input" for="">
                                    <i className="far fa-envelope icon-modify"></i>
                                    <input type="email" name="email" placeholder="Email" onChange={this.UpdateLoginEmail} />
                                </label>

                                <label className="label-input" for="">
                                    <i className="fas fa-lock icon-modify"></i>
                                    <input type="senha" name="senha" placeholder="Senha" onChange={this.UpdateLoginSenha} />
                                </label>

                                <a className="password" href="#">esqueceu a senha?</a>
                                <button className="btn btn-second" onClick={this.DoLogin}>Login</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login