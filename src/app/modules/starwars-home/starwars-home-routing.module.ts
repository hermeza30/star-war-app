import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsHomeComponent } from './starwars-home.component';
import { ROUTER_UTIL } from 'src/app/constants';

const routes: Routes = [
  {
    path: '',
    component: StarwarsHomeComponent,
    children: [
      { path: '', redirectTo: ROUTER_UTIL.films, pathMatch: 'full' },
      {
        path: ROUTER_UTIL.films,
        loadComponent: async () =>
          (await import('./components/film/film.component')).FilmComponent,
      },
      {
        path: ROUTER_UTIL.peoples,
        loadComponent: async () =>
          (await import('./components/people/people.component'))
            .PeopleComponent,
      },
      {
        path: ROUTER_UTIL.planets,
        loadComponent: async () =>
          (await import('./components/planets/planets.component'))
            .PlanetsComponent,
      },
      {
        path: ROUTER_UTIL.vehicles,
        loadComponent: async () =>
          (await import('./components/vehicle/vehicle.component'))
            .VehicleComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsRoutingModule {}
