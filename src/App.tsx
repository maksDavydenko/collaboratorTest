import './App.sass';
import { Logo } from './components/Logo/logo';
import { Filter } from './components/Filter/filter';
import { Sort } from './components/Sort/sort';
import { Content } from './components/Content/content';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <Provider store={store}>
    <>
       <Logo/>
      <div className='content-block'>
        <Filter/>
        <div>
          <Sort/>
          <Content/>
        </div>
      </div>
      
</>
      </Provider>
  );
}

export default App;
