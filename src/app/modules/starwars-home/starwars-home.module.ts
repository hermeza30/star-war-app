import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { StarwarsHomeComponent } from './starwars-home.component';
import { StarWarsRoutingModule } from './starwars-home-routing.module';
import { RouterModule } from '@angular/router';
import { StarWarsServiceService } from '../service/star-wars-service.service';

@NgModule({
  declarations: [StarwarsHomeComponent],
  imports: [CommonModule, NavbarComponent, StarWarsRoutingModule],
  providers: [StarWarsServiceService],
})
export class StarwarsHomeModule {}
