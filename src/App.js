import './App.css';
import EndGame from './components/EndGame';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Main from './components/Main';
import WordProvider from './context/WordProvider';

function App() {
  return (
    <WordProvider>
      <Header />
      <Main />
      <Keyboard />
      <EndGame />
    </WordProvider>
  );
}

export default App;
