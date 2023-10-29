import { Component } from '@angular/core';
import { StarWarsServiceService } from '../service/star-wars-service.service';

@Component({
  selector: 'app-starwars-home',
  templateUrl: './starwars-home.component.html',
  styleUrls: ['./starwars-home.component.scss'],
  providers: [StarWarsServiceService],
})
export class StarwarsHomeComponent {}
