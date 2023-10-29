import { Component } from '@angular/core';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

@Component({
  selector: 'app-starwars-home',
  templateUrl: './starwars-home.component.html',
  styleUrls: ['./starwars-home.component.scss'],
  providers: [StarWarsServiceService],
})
export class StarwarsHomeComponent {
  public showSpinner: boolean = false;
  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.spinnerObs$.subscribe((v) => {
      this.showSpinner = v;
    });
  }
}
