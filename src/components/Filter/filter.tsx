import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
 filterTickets
} from '../../redux/actions';

import './Filter.sass';

export const Filter = () => {
  const dispatch = useDispatch();

  const [allTicketsSelect, setAllTicketsSelect] = useState<boolean | undefined>(true);
  const [nonTransit, setNonTransit] = useState<boolean | undefined>(false);
  const [oneTransit, setOneTransit] = useState<boolean | undefined>(false);
  const [twoTransit, setTwoTransit] = useState<boolean | undefined>(false);
  const [threeTransit, setThreeTransit] = useState<boolean | undefined>(false);

  const handleFilter = () => {
    let filterArr: number[] = [];
  
    if (allTicketsSelect) {
      dispatch(filterTickets([0, 1, 2, 3]));
    } else {
      if (nonTransit) filterArr.push(0);
      if (oneTransit) filterArr.push(1);
      if (twoTransit) filterArr.push(2);
      if (threeTransit) filterArr.push(3);

      dispatch(filterTickets(filterArr));
    }
  }

  return (
    <div className="filter">
      <h4 className="filter__header">КІЛЬКІСТЬ ПЕРЕСАДОК</h4>
      <ul className="filter__list">
        <li className="filter__item">
          <input 
            className="filter__checkbox" 
            id="checkbox-all" 
            type="checkbox" 
            checked = {allTicketsSelect}
            onChange={() => {handleFilter(); setAllTicketsSelect(!allTicketsSelect)}}/>
          <label htmlFor="checkbox-all" className="filter__checkboxLabel">Всі</label>
        </li>
        <li className="filter__item">
          <input 
          className="filter__checkbox" 
          id="non-transit" 
          type="checkbox"
          checked={nonTransit}
          onChange={() => {setNonTransit(!nonTransit); handleFilter()}}
           />
          <label htmlFor="non-transit" className="filter__checkboxLabel">Без пересадок</label>
        </li>
        <li className="filter__item">
          <input 
            className="filter__checkbox" 
            id="one-transfer"
            type="checkbox" 
            checked={oneTransit}
            onChange={() => {setOneTransit(!oneTransit); handleFilter()}}
           />
          <label htmlFor="one-transfer" className="filter__checkboxLabel"
          >1 пересадка</label>
        </li>
        <li className="filter__item">
          <input 
          className="filter__checkbox" 
          id="two-transfer"
          type="checkbox" 
          checked={twoTransit}
          onChange={() => {setTwoTransit(!twoTransit); handleFilter()}}
          />
          <label htmlFor="two-transfer" className="filter__checkboxLabel"
         >2 пересадки</label>
        </li>
        <li className="filter__item">
          <input 
          className="filter__checkbox" 
          id="three-transfers" 
          type="checkbox"
          checked={threeTransit}
            onChange={() => {setThreeTransit(!threeTransit); handleFilter()}}
          />
          <label htmlFor="three-transfers" className="filter__checkboxLabel">3 пересадки</label>
        </li>
      </ul>
    </div>
  );
}
