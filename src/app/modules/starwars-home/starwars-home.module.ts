import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { StarwarsHomeComponent } from './starwars-home.component';
import { StarWarsRoutingModule } from './starwars-home-routing.module';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

@NgModule({
  declarations: [StarwarsHomeComponent],
  imports: [
    CommonModule,
    NavbarComponent,
    StarWarsRoutingModule,
    SpinnerComponent,
  ],
  providers: [StarWarsServiceService, SpinnerService],
})
export class StarwarsHomeModule {}
