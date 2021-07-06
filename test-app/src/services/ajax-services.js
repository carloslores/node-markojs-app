import fetch from 'node-fetch';

class Services {

    constructor() {
        this.baseUrl = 'https://api.rawg.io/api/'
        this.apiKey = '44ceb58f15b2456188645f8ffd08ef94';
    }

    static getAllVideogames() {
        const videogames = fetch(`https://api.rawg.io/api/games?key=44ceb58f15b2456188645f8ffd08ef94`)
                            .then(response => response.json())
                            .then(data => data.results);
        const results = async () => {
            const videogameFiltered = await videogames;
            return videogameFiltered;
        }
        return results()
                .then(data => data)
    }
}

export default Services;