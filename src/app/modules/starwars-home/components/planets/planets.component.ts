import { Component, Inject, OnDestroy, inject } from '@angular/core';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { Planet, WrapperArray } from 'src/app/interfaces/people.interface';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class PlanetsComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();
  private starWarsServiceService: StarWarsServiceService = inject(
    StarWarsServiceService
  );
  public planets$: Observable<Planet[]> = this.starWarsServiceService
    .getPlanetById<WrapperArray<Planet>>()
    .pipe(
      this.starWarsServiceService.mapOperator<Planet>('planets'),
      takeUntil(this.destroy$)
    );
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
