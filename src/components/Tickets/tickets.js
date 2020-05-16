import React from "react";
import * as _ from 'lodash';
import PropTypes from 'prop-types';
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
import AviasalesHelper from "../../services/aviasalesHelper";


const Tickets = (props) => {
    const helper = new AviasalesHelper();
    const {tickets, filters} = props;
    const newTicketsArr = tickets.filter(el => {
        if (filters.includes(String(el.segments[0].stops.length)) ||
            filters.includes(String(el.segments[0].stops.length))) {
            return el;
        } else if (filters.includes('4')) {
            return el;
        }
        return null;
    });

    return (
        <StyledContainer>
            {newTicketsArr.map((el) => {
                const {price, carrier, segments} = el;
                return (<Ticket key={_.uniqueId()}>
                    <FirstTicketColumn>
                        <Price>{(price).toLocaleString('ru')} P</Price>
                        <GreyText>{segments[0].origin}-{segments[0].destination}</GreyText>
                        <BlackText>{helper.timeHelper(segments[0].date, segments[0].duration)}</BlackText>
                        <GreyText>{segments[1].origin}-{segments[1].destination}</GreyText>
                        <BlackText>{helper.timeHelper(segments[1].date, segments[1].duration)}</BlackText>
                    </FirstTicketColumn>
                    <SecondColumn>
                        <ColumnTwoHeader>В ПУТИ</ColumnTwoHeader>
                        <BlackText>{helper.flightTimeCounter(segments[0].date, segments[0].duration)}</BlackText>
                        <GreyText>В ПУТИ</GreyText>
                        <BlackText>{helper.flightTimeCounter(segments[1].date, segments[1].duration)}</BlackText>
                    </SecondColumn>
                    <FirdColumn>
                        <Img src={`https://pics.avs.io/99/36/${carrier}.png`}/>
                        <GreyText>{helper.stopsCounter(segments[0].stops)}</GreyText>
                        <BlackText>{helper.stopsName(segments[0].stops)}</BlackText>
                        <GreyText>{helper.stopsCounter(segments[1].stops)}</GreyText>
                        <BlackText>{helper.stopsName(segments[1].stops)}</BlackText>
                    </FirdColumn>
                </Ticket>)
            })}
        </StyledContainer>
    )
}

export default Tickets;
Tickets.propTypes = {
    tickets: PropTypes.array,
    filters: PropTypes.array
}
Tickets.defaultProps = {
    tickets: [],
    filters: []
}