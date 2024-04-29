
import Logo from '../../media/a4e logo.png';
import './contentItem.sass';
export const ContentItem = () => {

    return (
        <div className="content-item">
            <div className="content-item__header">
                <div className="price">13 300 $</div>
                <img src={Logo} alt='ailine company'></img>
            </div>
            <div className='information-content'>
            <div className="info">
               <div className="info__header">
                    LHR – DXB
               </div>
               <div className="info__content">
                    10:45 – 08:00
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                    В ДОРОЗІ
               </div>
               <div className="info__content">
                    10:45 – 08:00
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                 1 пересадка
               </div>
               <div className="info__content">
                    10:45 – 08:00
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                DXB – LHR
               </div>
               <div className="info__content">
                    10:45 – 08:00
               </div>
            </div>
            <div className="info">
               <div className="info__header">
               В ДОРОЗІ
               </div>
               <div className="info__content">
                    10:45 – 08:00
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                2 пересадки
               </div>
               <div className="info__content">
                    10:45 – 08:00
               </div>
            </div>
            </div>
        </div>
    );
  }
  