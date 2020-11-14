import logo from './logo.svg';
import './App.css';
import {Pathfinder} from './components'

function App() {
  return (
    <div className="App">
      <Pathfinder
      rowLimit={30}
      columnLimit={20}
      >

      </Pathfinder>
    </div>
  );
}

export default App;
