import './App.sass';
import { Logo } from './components/Logo/Logo';
import { Filter } from './components/Filter/Filter';
import { Sort } from './components/Sort/Sort';
import { TicketsList } from './components/TicketsList/TicketsList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
    <>
      <Logo/>
      <div className='content-block'>
        <Filter/>
        <div>
          <Sort/>
          <TicketsList/>
        </div>
      </div>  
    </>
      </Provider>
  );
}

export default App;
