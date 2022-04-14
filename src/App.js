import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';

function App() {

  return (
    <div className='firstcomponent'>
      <h1>Hello World!</h1>
      <FirstComponent/>
      <AnotherComponent/>
      <Images/>
      <Hooks/>
      <List/>
      <RenderCond/>
    </div>
  );
}

export default App;
