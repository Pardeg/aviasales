import React from 'react';
import aviasalesApi from "./services/aviasalesApi";
import Tickets from "./components/Tickets/tickets";
import StopsControl from "./components/StopsControl/stopsControl";
import './App.scss';
import {MainContainer, RightSideWrapper, StyledMainLogo} from "./styledApp";
import SortButtons from "./components/SortButtons/sortButtons";
import mainLogo from './images/mainLogo.svg';

const initialState = {
    tickets: [],
    searchId: '',
    filters: [],
    checkedValues: {
        'allStops': false,
        'withoutStops': false,
        'oneStop': false,
        'twoStops': false,
        'threeStops': false
    },
    checkSortByPrice: false,
    checkSortByTime: false
}

class App extends React.Component {
    state = initialState;

    componentDidMount() {
        aviasalesApi.loadTickets((chunk) => {
            this.setState(({tickets}) => ({tickets: [...tickets, ...chunk]}));
        })

    }

    handleCheck = (e) => {
        const {checked, value, name} = e.target;
        const {checkedValues} = this.state;
        if (checked) {
            if (value === 'allStops') {
                console.log(checkedValues)
                this.setState(({filters}) => ({
                    filters: [...filters, value],
                    checkedValues: {
                        [name]: true,
                        'withoutStops': true,
                        'oneStop': true,
                        'twoStops': true,
                        'threeStops': true
                    }
                }));
            } else {
                this.setState(({filters}) => ({
                    filters: [...filters, value],
                    checkedValues: {...checkedValues, [name]: true}
                }));
            }
        }
        if (!checked) {
            if (value === 'allStops') {
                const {filters} = this.state;
                const newFilters = filters.filter(el => el !== value);
                this.setState(() => ({
                    filters: newFilters,
                    checkedValues: {
                        'allStops': false,
                        'withoutStops': false,
                        'oneStop': false,
                        'twoStops': false,
                        'threeStops': false
                    }
                }));
            } else {
                const {filters} = this.state;
                const newFilters = filters.filter(el => el !== value);
                this.setState(() => ({
                    filters: newFilters,
                    checkedValues: {...checkedValues, [name]: false}
                }));
            }
        }
    }

    toggleSortButtons = (e) => {
        const {name} = e.target;
        const {tickets} = this.state;
        if (name === 'priceSort') {
            const sortedArr = tickets.sort((a, b) => a.price > b.price ? 1 : -1);
            this.setState(() => ({
                tickets: sortedArr,
                checkSortByPrice: true,
                checkSortByTime: false
            }));
        }
        if (name === 'timeSort') {
            const sortedArr = tickets.sort((a, b) => {
                const {segments: [{duration: startA}, {duration: endA}]} = a;
                const {segments: [{duration: startB}, {duration: endB}]} = b;
                return ((startA + endA) > (startB + endB) ? 1 : -1);
            });
            this.setState(() => ({
                tickets: sortedArr,
                checkSortByPrice: false,
                checkSortByTime: true
            }));
        }
    }


    render() {
        const {
            tickets,
            filters,
            checkedValues,
            checkSortByTime,
            checkSortByPrice
        } = this.state;
        return (
            <MainContainer>
                <StopsControl onChange={this.handleCheck}
                              checked={checkedValues}/>
                <RightSideWrapper>
                    <StyledMainLogo
                        src={mainLogo}/>
                    <SortButtons onClick={this.toggleSortButtons}
                                 checkByPrice={checkSortByPrice}
                                 checkByTime={checkSortByTime}/>
                    <Tickets tickets={tickets}
                             filters={filters}
                    />
                </RightSideWrapper>
            </MainContainer>
        )
    }
}


export default App;
