import './App.scss';
import { Button } from './components/Button/Button';

function App() {

  function fireClick() {
    console.log('[e]');
  }

  return (
    <div className="App">
      <Button onClick={fireClick}>Primary Button</Button>
      <Button className="secondary" onClick={fireClick}>Secondary Button</Button>
      <Button  onClick={fireClick} disabled>ABCDE</Button>
      <Button className="secondary" onClick={fireClick} disabled>FGHIJ</Button>
    </div>
  );
}

export default App;
