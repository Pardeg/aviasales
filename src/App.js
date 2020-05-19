import React from 'react';
import axios from 'axios';
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

    _searchIdUrl = `https://front-test.beta.aviasales.ru/search`;

    _searchTickets = `https://front-test.beta.aviasales.ru/tickets?searchId`;

    componentDidMount() {
        this.getSearchId();
        setTimeout(this.getTickets, 1000);
    }

    getSearchId = async () => {
        const response = await axios.get(this._searchIdUrl);
        await this.setState(() => ({searchId: response.data.searchId}));
    }

    getTickets = async () => {
        try {
            const {searchId} = this.state;
            console.log(searchId);
            const response = await axios.get(`${this._searchTickets}=${searchId}`);
            await this.setState(({tickets}) => ({tickets: [...tickets, ...response.data.tickets]}));
            if (response.data.stop === false) {
                this.getTickets();
            }
        } catch (e) {
            console.log(e);
            this.getTickets();

        }
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
            }else{
                const {filters} = this.state;
                const newFilters = filters.filter(el => el !== value);
                this.setState(() => ({
                    filters: newFilters,
                    checkedValues: {...checkedValues, [name]: false}
                }));
            }
        }
    }

    sortByPrice = () => {
        const {tickets} = this.state;
        const sortedArr = tickets.sort((a, b) => a.price > b.price ? 1 : -1);
        this.setState(() => ({
            tickets: sortedArr,
            checkSortByPrice: true,
            checkSortByTime: false
        }));
    }

    sortByTime = () => {
        const {tickets} = this.state;
        const sortedArr = tickets.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) >
        (b.segments[0].duration + b.segments[1].duration) ? 1 : -1);
        this.setState(() => ({
            tickets: sortedArr,
            checkSortByPrice: false,
            checkSortByTime: true
        }));
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
                    <SortButtons sortByPrice={this.sortByPrice}
                                 sortByTime={this.sortByTime}
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
