import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import pages
import Login from './pages/login/login.js';
import crieseuevento from './pages/crieseuevento/crieseuevento.js';
import adminperfil from './pages/admin/admin';
import AdministradorPadrinho from './pages/admin/admpadrinho';
import AdministradorAprova from './pages/admin/admaprova';
import EditeSeuPerfil from './pages/editeseuperfil/editeseuperfil.js';
import comunidade from './pages/comunidade/comunidade';
import  visualizeseuevento from './pages/crieseuevento/visualizeseuevento';

// IMPORT STYLE
import './pages/admin/admin.css';

//import MDB
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';




// import editeseuperfil from './pages/editeseuperfil/editeseuperfil';



const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/home" component={App} />
                <Route path='/login' component={Login} />
                <Route path='/criandoevento' component={crieseuevento} />
                <Route path='/administrador' component={adminperfil} />
                <Route path='/editeseuperfil' component={EditeSeuPerfil}/>
               <Route path='/administrador' component={adminperfil}/>
               <Route path='/administradoraprova' component={AdministradorAprova}/>
               <Route path='/administradorpadrinho' component={AdministradorPadrinho}/>
               <Route path='./comunidadeperfil' component={comunidade}/>
               <Route path="/visualizeevento" component={visualizeseuevento}/>
            </Switch>
        </div>
    </Router>
)





ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
