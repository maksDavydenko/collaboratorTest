
import { useState } from 'react';

import './sort.sass';

export const Sort = () => {

  type SortValue = "cheapest" | "fastest" | "optimal";

  const [activeSort, setActiveSort] = useState('cheapest');

    const handleSort = (sortValue: SortValue) => {
    
        setActiveSort(sortValue);
      }

    return (
        <ul className="sort">
          <li className={`sort__item ${activeSort === 'cheapest' && 'sort__item-active'}`} onClick={() => handleSort("cheapest")}>
                Найдешевший
          </li>
          <li className={`sort__item ${activeSort === 'fastest' && 'sort__item-active'}`} onClick={() => handleSort("fastest")}>
                Найшвидший
          </li>
          <li className={`sort__item ${activeSort === 'optimal' && 'sort__item-active'}`} onClick={() => handleSort("optimal")}>
              Оптимальний
          </li>
        </ul>
    );
  }
  