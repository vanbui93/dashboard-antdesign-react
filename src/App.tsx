import { DatePicker } from 'antd';
import './scss/style.scss';
import logo from './logo.svg';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <DatePicker />
      </header>
    </div>
  );
}

export default App;
