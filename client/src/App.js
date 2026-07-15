import './App.css';
import Main from './Components/Main';
import { store } from './Components/Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">

      <Provider store={store} >
          <Main />
      </Provider>

    </div>
  );
}

export default App;
