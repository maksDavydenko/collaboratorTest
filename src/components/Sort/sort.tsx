
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  sortPrice,
  sortFasters,
  sortOptimal
} from '../../redux/actions';
import './Sort.sass';

export const Sort = () => {

  type SortValue = "cheapest" | "fastest" | "optimal";

  const [activeSort, setActiveSort] = useState<SortValue>('cheapest');
  const dispatch = useDispatch();

    const handleSort = (sortValue: SortValue) => {
        setActiveSort(sortValue);
    }

    useEffect(() => {
      dispatch(sortPrice());
    },[])

    return (
        <ul className="sort">
          <li className={`sort__item ${activeSort === 'cheapest' && 'sort__item-active'}`} 
          onClick={() => {dispatch(sortPrice()); handleSort("cheapest")}}>
              Найдешевший
          </li>
          <li className={`sort__item ${activeSort === 'fastest' && 'sort__item-active'}`}
           onClick={() =>{dispatch(sortFasters()); handleSort("fastest")}}>
              Найшвидший
          </li>
          <li className={`sort__item ${activeSort === 'optimal' && 'sort__item-active'}`} 
          onClick={() => {dispatch(sortOptimal()); handleSort("optimal")}}>
              Оптимальний
          </li>
        </ul>
    );
  }
  