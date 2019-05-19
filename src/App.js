//Como o componente nao possui estado, nao precisa importar o {Component}.
//Lembrando: apenas no caso de utilizar o componente como uma funcao ou como uma constante.
// Mas vou deixar aqui como uma classe mesmo.
import React from 'react';
import './App.css';
/*foi passado o index no final mas só por didática. o React já entende que o que é buscado na pasta main é o index
  import Main from './pages/Main/index.js'
ao invés de importar a pagina main, serao importadas as rotas:
*/
import Routes from './routes';
//import Main from './pages/Main';

/* essa classe poderia ser escrita num formato de funcao:
function App(){
  return <Main/>;
}
que como se percebe, retira a necessidade de extender ao componente, ja que o mesmo nao possui estado. 
ou como uma constante, como nessa arrowfunction:
*/
const App = () => <Routes />; 

//bem mais enxuta! mas vou deixar como o formato padrao.

/*
class App extends Component{
  render() {
    return <Routes />
  }
}
*/
export default App;
