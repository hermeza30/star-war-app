import { Component, Inject, inject } from '@angular/core';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Film, WrapperArray } from 'src/app/interfaces';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class FilmComponent {
  private destroy$: Subject<void> = new Subject();
  private starWarsServiceService: StarWarsServiceService = inject(
    StarWarsServiceService
  );
  private spinnerService: SpinnerService = inject(SpinnerService);
  public films$: Observable<Film[]> = new Observable();
  constructor() {
    this.spinnerService.showSpinner();
    this.films$ = this.starWarsServiceService
      .getFilmById<WrapperArray<Film>>()
      .pipe(
        this.starWarsServiceService.mapOperator<Film>('films'),
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
