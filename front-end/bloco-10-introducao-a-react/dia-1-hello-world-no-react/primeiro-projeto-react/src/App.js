import './App.css';

const compromissos = ['acordar', 'malhar','estudar', 'comer', 'dormir']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {compromissos.map(Task)}
    </div>
  );
}

export default App;
