import React from "react";
import {uniqueId} from 'lodash';
import PropTypes from 'prop-types';
import helper from "../../services/aviasalesHelper";
import {
    BlackText,
    ColumnTwoHeader,
    FirdColumn,
    FirstTicketColumn,
    GreyText,
    Img,
    Price,
    SecondColumn,
    StyledContainer,
    Ticket
} from "./styledTickets";



const Tickets = (props) => {
    const {tickets, filters} = props;
    const newTickets = tickets.filter(el => {
        const {
            segments: [{stops: firstStops},
                {stops: secondStops}]
        } = el;
        if (filters.includes(String(firstStops.length)) || filters.includes(String(secondStops.length))) {
            return el;
        }
        if (filters.includes('allStops')) {
            return el;
        }
        return null;
    })
        .slice(0, 5);

    const ticketsRender = (data) => {
        return (
            data.map((el) => {
                const {
                    price, carrier, segments: [{
                        origin: originStart,
                        destination: destinationStart,
                        date: dateStart,
                        duration: durationStart,
                        stops: stopsStart
                    }, {
                        origin: originEnd,
                        destination: destinationEnd,
                        date: dateEnd,
                        duration: durationEnd,
                        stops: stopsEnd
                    }]
                } = el;
                return (
                    <Ticket key={uniqueId()}>
                        <FirstTicketColumn>
                            <Price>{(price).toLocaleString('ru')} P</Price>
                            <GreyText>{originStart}-{destinationStart}</GreyText>
                            <BlackText>{helper.flightTimeEditor(dateStart, durationStart)}</BlackText>
                            <GreyText>{originEnd}-{destinationEnd}</GreyText>
                            <BlackText>{helper.flightTimeEditor(dateEnd, durationEnd)}</BlackText>
                        </FirstTicketColumn>
                        <SecondColumn>
                            <ColumnTwoHeader>В ПУТИ</ColumnTwoHeader>
                            <BlackText>{helper.flightTimeCounter(dateStart, durationStart)}</BlackText>
                            <GreyText>В ПУТИ</GreyText>
                            <BlackText>{helper.flightTimeCounter(dateEnd, durationEnd)}</BlackText>
                        </SecondColumn>
                        <FirdColumn>
                            <Img src={`https://pics.avs.io/99/36/${carrier}.png`}/>
                            <GreyText>{helper.stopsCounter(stopsStart)}</GreyText>
                            <BlackText>{helper.stopsName(stopsStart)}</BlackText>
                            <GreyText>{helper.stopsCounter(stopsEnd)}</GreyText>
                            <BlackText>{helper.stopsName(stopsEnd)}</BlackText>
                        </FirdColumn>
                    </Ticket>)
            })
        )
    }
    return (
        <StyledContainer>
            {ticketsRender(newTickets)}
        </StyledContainer>
    )
}

export default Tickets;
Tickets.propTypes = {
    tickets: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
}
