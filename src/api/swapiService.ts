import axios from "axios";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

class SwapiClient {
  private baseURL: string;

  constructor() {
    this.baseURL = "https://swapi.dev/api";
  }

  public async getAllCharacters(): Promise<Character[]> {
    let characters: Character[] = [];
    let nextPage: string | null = `${this.baseURL}/people/`;

    while (nextPage) {
      try {
        const response: axios.AxiosResponse = await axios.get(nextPage);
        const results: Character = response.data.results;
        characters = characters.concat(results);
        nextPage = response.data.next;
      } catch (error) {
        console.error("Error fetching characters:", error);
        break;
      }
    }

    return characters;
  }

  public async getCharacter(): Promise<Character> {
    const newCharacter: Character = {
      name: "Dara Voss",
      height: "165",
      mass: "60",
      hair_color: "black",
      skin_color: "olive",
      eye_color: "green",
      birth_year: "30BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/2/",
      films: ["https://swapi.dev/api/films/7/"],
      species: ["https://swapi.dev/api/species/1/"],
      vehicles: ["https://swapi.dev/api/vehicles/8/"],
      starships: ["https://swapi.dev/api/starships/10/"],
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      url: "https://swapi.dev/api/people/1000/",
    };
    return newCharacter;
  }
}

export default SwapiClient;
