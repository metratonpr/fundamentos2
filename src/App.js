import './App.css';
import Hello from './componentes/basico/Hello';
import Card from './componentes/layout/Card';

function App() {
  return (
    <div className="App">
      <Card titulo="Exercicio 2" color="#4a4e4d">
        <h1> Exercicio 2</h1>
      </Card>
      <Card titulo="Exercicio 1 - Hello World" color="#2ab7ca">
        <Hello/>
      </Card>
    </div>
  );
}

export default App;
