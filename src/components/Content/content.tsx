import { ContentItem } from '../ContentItem/contentItem';
import { useDispatch, useSelector } from 'react-redux';
import { useStore } from 'react-redux';

export const Content = () => {
    const store = useStore();
    const tickets = store.getState();

    console.log(tickets);

    return (
        <div>
            {/* {tickets.map(ticket => <ContentItem/> )} */}
            
            <button>Показати ще 5 квитків</button>
        </div>
    );
  }
  