import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/images';

function App() {

  return (
    <div className='firstcomponent'>
      <h1>Hello World!</h1>
      <FirstComponent></FirstComponent>
      <AnotherComponent></AnotherComponent>
      <Images></Images>
    </div>
  );
}

export default App;
