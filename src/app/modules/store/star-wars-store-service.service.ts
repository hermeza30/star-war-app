import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { INITIAL_STATE } from 'src/app/constants';
import { InitialState } from 'src/app/interfaces/store.interface';
import { Film, People, Planet, Vehicle } from 'src/app/interfaces';
import { Observable } from 'rxjs';
@Injectable()
export class StarWarsStoreServiceService extends ComponentStore<InitialState> {
  private saveFilms$: Observable<Film[]> = this.select(
    (state: InitialState) => state.films
  );
  private savePlanets$: Observable<Planet[]> = this.select(
    (state: InitialState) => state.planets
  );
  private saveVehicle$: Observable<Vehicle[]> = this.select(
    (state: InitialState) => state.vehicles
  );
  private savePeoples$: Observable<People[]> = this.select(
    (state: InitialState) => state.peoples
  );
  constructor() {
    super(INITIAL_STATE);
  }

  public updateFilm = this.updater((state: InitialState, film: Film) => {
    const copyFilm: Film[] = [...state.films];
    copyFilm.push(film);
    return {
      ...state,
      films: [...copyFilm],
    };
  });

  public updateVehicle = this.updater(
    (state: InitialState, vehicle: Vehicle) => {
      const copyVehicles: Vehicle[] = [...state.vehicles];
      copyVehicles.push(vehicle);
      return {
        ...state,
        vehicles: [...copyVehicles],
      };
    }
  );

  public updatePlanet = this.updater((state: InitialState, planet: Planet) => {
    const copyPlanets: Planet[] = [...state.planets];
    copyPlanets.push(planet);
    return {
      ...state,
      planets: [...copyPlanets],
    };
  });

  public updatePeople = this.updater((state: InitialState, people: People) => {
    const copyPeople: People[] = [...state.peoples];
    copyPeople.push(people);
    return {
      ...state,
      peoples: [...copyPeople],
    };
  });
}
