import './App.css';
import Hello from './componentes/basico/Hello';
import Card from './componentes/layout/Card';
import ComParametros from './componentes/basico/ComParametros';
import Aleatorio from './componentes/basico/Aleatorio';
import Familia from './componentes/basico/Familia';
import FamiliaMembro from './componentes/basico/FamiliaMembro';
import ListaAlunos from './componentes/repeticao/ListaAlunos';
import IndiretaPai from './componentes/indireto/IndiretoPai';
import Input from './componentes/input/Input';
function App() {
  return (
    <div className="App">

      <Card titulo="Exercicio 7 - Input" color="#f6cd61">
        <Input />
      </Card>

      <Card titulo="Exercicio 6 - Comunicacao Indireta" color="#0392cf">
        <IndiretaPai />
      </Card>

      <Card titulo="Exercicio 5 - Repetição" color="#0392cf">
        <ListaAlunos />
      </Card>

      <Card titulo="Exercicio 4 - Familia + Membro" color="#0392cf">
        <Familia sobrenome="Lara">
          <FamiliaMembro nome="Anderson" />
          <FamiliaMembro nome="Rafael" />
        </Familia>
      </Card>

      <Card titulo="Exercicio 3" color="#63ace5">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="Exercicio 2" color="#4a4e4d">
        <ComParametros nome='João' materia='Biologia' nota={6} />
      </Card>

      <Card titulo="Exercicio 1 - Hello World" color="#2ab7ca">
        <Hello />
      </Card>
    </div>
  );
}

export default App;
