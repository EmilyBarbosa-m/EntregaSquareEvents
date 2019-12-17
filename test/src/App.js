import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'



class App extends Component {
  render() {

    return (
      <div className="App">
        
        <Header/>

        
        {/* <header id="topo-home">
          <nav className="menu-home">
            <a href="#" />
            <img className="imagem_logo_home" src={require("./assets/img/logo.png")} alt="logo do site square events" />
            <h1 id="hlogo">SquareEvents Home</h1>


            <ul id="ul-home">
              <li id="li-home"><a className="home-as" href="#">Home</a></li>
              <li id="li-home"><a className="home-as" href="#">Login</a></li>
              <li id="li-home"><a className="home-as" href="#">Crie Seu Evento</a></li>
            </ul>
          </nav>
        </header> */}


        <main>
          <section id="home_banner" />
        </main>

        <div className="container-1-home">
          <div id="fotosobre-home">
            <img className="imagem_sobrehome" src={require("./assets/img/undraw_getting_coffee_wntr.png")} alt="duas garotas conversando e uma delas é cadeirante" width="600px" />
          </div>

          <div id="sobrenos-home">
            <h1 id="hsobre-home"> Você pode e deve realizar o seu evento na ThoughtWorks: </h1>

            <p id="psobre-home"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos itaque eius id voluptate
                beatae consequatur eos voluptates fuga, neque libero in sit debitis error accusantium deserunt ipsam,
                molestias nemo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita vero beatae doloribus
                magni molestias, ipsum, tempora illo doloremque odio assumenda labore perspiciatis cumque quia
                accusantium quis nemo itaque, consequatur a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi quod reprehenderit quo consectetur iusto molestias deleniti, eligendi expedita iure dolorem dolorum
                  distinctio esse, non placeat? Voluptates suscipit rerum commodi eveniet!
              </p>
          </div>
        </div>

        <section id="categorias_home">
          <div className="categorias_home_boxs">

            <div>
              <div className="img-icones-home">
                <img src={require('./assets/img/mic.png')} alt="microfone" />
              </div>


              <h2 id="hicones">Arte e Cultura</h2>
              <p id="picones"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse fringilla fringilla.</p>
            </div>

            <div>
              <div className="img-icones-home">
                {/* <img src={require("./assets/img/pacman.png")} alt="personagem de jogo pacman" /> */}
                <h2 id="hicones">Tecnologia/Programação</h2>
                <p id="picones"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse fringilla fringilla.</p>
              </div>
            </div>



            <div>
              <div className="img-icones-home">
                {/* <img src={require("./assets/img/crayon.png")} alt="giz de cera" /> */}
                <h2 id="hicones">Cursos e Workshops</h2>
                <p id="picones"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse fringilla fringilla.</p>
              </div>
            </div>


            <div className="rightcontainer-home">
              <img className="imagem_container_home" src={require("./assets/img/undraw_having_fun_iais.png")} alt="equipe reunida se divertindo e segurando bebidas" />

              <a href="#">
                <button className="button-home" ><span>Conheça as Comunidades </span></button>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
