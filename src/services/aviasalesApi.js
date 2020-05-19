import axios from "axios";

class AviasalesApi {

    _searchIdUrl = `https://front-test.beta.aviasales.ru/search`;

    _searchTickets = `https://front-test.beta.aviasales.ru/tickets?searchId`;

    getTickets= async() =>{
      const response = await axios.get(this._searchIdUrl);
      const searchId =  response.data.searchId;
     let tickets= [];

    }
    const getTicketsData =async ()=>{
        try {
            const res = await axios.get(`${this._searchTickets}=${searchId}`);
            if (response.data.stop === false) {
                getTicketsData();
            }
            return res.data.tickets;
        }catch(e){
            getTicketsData();
        }
    }
}

export const aviasalesApi = new AviasalesApi();