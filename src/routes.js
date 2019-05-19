import React from 'react';
/* existem varios tipos de routers (HashRouter, NativeRouter...). o BrowserRouter eh o mais comum, que eh basicamente:
 A navegacao onde as rotas (na url) ficam apenas com barra ("/").
 Por exemplo, aplicacao.com/usuarios/listar... esse sera o tipo utilizado.
 O Switch garante que apenas uma rota seja chamada por momento.
 O react-router-dom permite que duas rotas sejam chamadas ao mesmo tempo, mas nao eh o que queremos pra essa app. */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//rotas que serao utilizadas na constante Routes:
//importando os componentes
import Main from './pages/Main';
import Box from './pages/Box';

//arrow function que poderia também ser exibida sa seguinte forma:
/*
function Routes(){
    return (
        <BrowserRouter>
            <Switch>

            </Switch>
        <BrowserRouter/>
        );
}
*/
const Routes = () => (
    <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/box/:id" component={Box}/>
         </Switch>
    </BrowserRouter>
);

export default Routes;
