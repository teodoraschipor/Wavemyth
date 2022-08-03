import './App.scss';
import WaveMythRouter from './routing/WaveMythRouter';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <WaveMythRouter />
    </Provider>
  );
}

export default App;
