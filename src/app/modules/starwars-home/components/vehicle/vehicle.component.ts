import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CardComponent } from 'src/app/components/card/card.component';
import { Vehicle, WrapperArray } from 'src/app/interfaces';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  standalone: true,
  imports: [CardComponent, CommonModule],
})
export class VehicleComponent {
  private destroy$: Subject<void> = new Subject();
  private starWarsServiceService: StarWarsServiceService = inject(
    StarWarsServiceService
  );
  public vehicle$: Observable<Vehicle[]> = this.starWarsServiceService
    .getVehicleById<WrapperArray<Vehicle>>()
    .pipe(
      this.starWarsServiceService.mapOperator<Vehicle>('vehicle', false),
      takeUntil(this.destroy$)
    );
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
