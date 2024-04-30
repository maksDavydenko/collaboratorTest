import { Ticket } from '../Ticket/Ticket';
import {useSelector } from 'react-redux';
import { Button } from '../Button/Button';

export const TicketsList = () => {
    const ticketsObject = useSelector((state: any) => state.tickets);
    const ticketsArray = Object.values(ticketsObject);

    return (
        <>            
            {ticketsArray.map((ticket: any) => (
                <Ticket ticket={ticket}/>
            ))}
            <Button/>
        </>
    );
}
