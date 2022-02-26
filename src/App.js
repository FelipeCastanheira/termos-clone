import './App.css';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Main from './components/Main';
import WordProvider from './context/WordProvider';

function App() {
  return (
    <WordProvider>
      <Header />
      <Main />
      <header className="App-header">
        <button type="button" className="c-default">Cor Padrão</button>
        <button type="button" className="c-used">Cor Usada</button>
        <button type="button" className="c-almost">Cor Lugar-Errado</button>
        <button type="button" className="c-correct">Cor Correta</button>
      </header>
      <Keyboard />
    </WordProvider>
  );
}

export default App;
