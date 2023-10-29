import { Film, People, Planet, Starship, Vehicle } from './people.interface';

export interface InitialState {
  films: Film[];
  vehicles: Vehicle[];
  peoples: People[];
  planets: Planet[];
  starships: Starship[];
}

export interface RouterUtil {
  starwarshome: string;
  films: string;
  planets: string;
  peoples: string;
  vehicles: string;
}
