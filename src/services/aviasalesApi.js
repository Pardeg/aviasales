import axios from "axios";

class AviasalesApi {

    _searchIdUrl = `https://front-test.beta.aviasales.ru/search`;

    _searchTickets = `https://front-test.beta.aviasales.ru/tickets?searchId`;


    getTickets = async (id) => {
        try {
            const response = await axios.get(`${this._searchTickets}=${id}`);
            if (response.data.stop === false) {
                this.getTickets(id)
            }
        } catch (e) {
            this.getTickets(id);
        }
    }

    getSearchId = async () => {
        const response = await axios.get(this._searchIdUrl);
        return response.data.searchId;
    }

    loadTickets = async (cb) => {
        const id = await this.getSearchId();
        let response = null;
        /* eslint-disable no-await-in-loop */
        do {
            response = await this.getChunk(id);
            cb(response.data.tickets);
        } while (response.data.stop === false)
        /* eslint-disable no-await-in-loop */
        console.log(` all chunks are loaded`);
    }

    getChunk = async (id) => {
        try {
            return await axios.get(`${this._searchTickets}=${id}`);
        } catch (e) {
            const res = await this.getChunk(id);
            return res;
        }
    }
}

const aviasalesApi = new AviasalesApi();
export default aviasalesApi;