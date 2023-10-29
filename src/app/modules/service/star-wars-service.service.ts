import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, OperatorFunction, map } from 'rxjs';
import { WrapperArray } from 'src/app/interfaces/people.interface';
import { API_URLS, PATH_IMAGES } from 'src/app/constants';
import { PathImage } from 'src/app/interfaces/image.interface';
@Injectable()
export class StarWarsServiceService {
  public httpClient: HttpClient = inject(HttpClient);

  public getPeopleById<T>(idPeople: string = ''): Observable<T> {
    return this.httpClient.get<T>(`${API_URLS.people}${idPeople}`);
  }
  public getFilmById<T>(idFilm: string = ''): Observable<T> {
    return this.httpClient.get<T>(`${API_URLS.films}${idFilm}`);
  }
  public getPlanetById<T>(idPlanet: string = ''): Observable<T> {
    return this.httpClient.get<T>(`${API_URLS.planets}${idPlanet}`);
  }
  public getStarshipById<T>(idStarship: string = ''): Observable<T> {
    return this.httpClient.get<T>(`${API_URLS.starships}${idStarship}`);
  }
  public getVehicleById<T>(idVehicle: string = ''): Observable<T> {
    return this.httpClient.get<T>(`${API_URLS.vehicles}${idVehicle}`);
  }
  public getSpecieById<T>(idSpecie: string = ''): Observable<T> {
    return this.httpClient.get<T>(`${API_URLS.species}${idSpecie}`);
  }

  public mapOperator<T>(
    keyof: keyof PathImage,
    mapImage: boolean = true
  ): OperatorFunction<WrapperArray<T>, T[]> {
    return map((wrapper: WrapperArray<T>) =>
      mapImage ? this.mapImages<T>(wrapper, keyof) : wrapper.results
    );
  }
  public mapImages<T>(wrapper: WrapperArray<T>, keyof: keyof PathImage): T[] {
    return wrapper.results.map((obj: T, index: number) => {
      const imgNumber: number = index + 1;
      return { ...obj, image: `${PATH_IMAGES[keyof]}/${imgNumber}.jpg` };
    });
  }
}
