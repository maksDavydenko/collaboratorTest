import './filter.sass';


export const Filter = () => {

  return (
    <div className="filter">
      <h4 className="filter__header">КІЛЬКІСТЬ ПЕРЕСАДОК</h4>
      <ul className="filter__list">
        <li className="filter__item">
          <input className="filter__checkbox" id="checkbox-all" type="checkbox" />
          <label htmlFor="checkbox-all" className="filter__checkboxLabel">Всі</label>
        </li>
        <li className="filter__item">
          <input className="filter__checkbox" id="non-transit" type="checkbox" />
          <label htmlFor="non-transit" className="filter__checkboxLabel">Без пересадок</label>
        </li>
        <li className="filter__item">
          <input className="filter__checkbox" id="one-transfer" type="checkbox" />
          <label htmlFor="one-transfer" className="filter__checkboxLabel">1 пересадка</label>
        </li>
        <li className="filter__item">
          <input className="filter__checkbox" id="two-transfer" type="checkbox" />
          <label htmlFor="two-transfer" className="filter__checkboxLabel">2 пересадки</label>
        </li>
        <li className="filter__item">
          <input className="filter__checkbox" id="three-transfers" type="checkbox" />
          <label htmlFor="three-transfers" className="filter__checkboxLabel">3 пересадки</label>
        </li>
      </ul>
    </div>
  );
}
