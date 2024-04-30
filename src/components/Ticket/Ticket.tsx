
import Logo from '../../media/a4e logo.png';
import './Ticket.sass';

export const Ticket = ({ ticket }: { ticket: any }) => {
     const { 
          priceLabel,
          firstFryTime,
          secondFryTime,
          firstFryTransit,
          secondFlyTransit,
          transfersLabel,
          transfersList
      } = ticket;
    return (
        <div className="content-item">
            <div className="content-item__header">
                <div className="price">{priceLabel}</div>
                <img src={Logo} alt='ailine company'></img>
            </div>
            <div className='information-content'>
            <div className="info">
               <div className="info__header">
                    LHR – DXB
               </div>
               <div className="info__content">
                    {firstFryTime}
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                    В ДОРОЗІ
               </div>
               <div className="info__content">
                    {firstFryTransit}
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                    {transfersLabel}               
               </div>
               <div className="info__content">
                    {transfersList}     
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                DXB – LHR
               </div>
               <div className="info__content">
               {secondFryTime}
               </div>
            </div>
            <div className="info">
               <div className="info__header">
               В ДОРОЗІ
               </div>
               <div className="info__content">
               {secondFlyTransit}
               </div>
            </div>
            <div className="info">
               <div className="info__header">
                    {transfersLabel}    
               </div>
               <div className="info__content">
                   {transfersList}
               </div>
            </div>
            </div>
        </div>
    );
  }
  