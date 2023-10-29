import { Component, OnDestroy, inject } from '@angular/core';
import { People, WrapperArray } from 'src/app/interfaces';
import { Observable, Subject, finalize, takeUntil, tap } from 'rxjs';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class PeopleComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();
  private starWarsServiceService: StarWarsServiceService = inject(
    StarWarsServiceService
  );
  private spinnerService: SpinnerService = inject(SpinnerService);
  public peoples$: Observable<People[]> = new Observable();
  constructor() {
    this.getPeoples();
  }
  private getPeoples(): void {
    this.spinnerService.showSpinner();
    this.peoples$ = this.starWarsServiceService
      .getPeopleById<WrapperArray<People>>()
      .pipe(
        this.starWarsServiceService.mapOperator<People>('people'),
        finalize(() => {
          this.spinnerService.hideSpinner();
        }),
        takeUntil(this.destroy$)
      );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
