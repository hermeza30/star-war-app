import { Component, Inject, inject } from '@angular/core';
import { StarWarsServiceService } from '../../../service/star-wars-service.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Film, WrapperArray } from 'src/app/interfaces';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';

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
  public films$: Observable<Film[]> = this.starWarsServiceService
    .getFilmById<WrapperArray<Film>>()
    .pipe(
      this.starWarsServiceService.mapOperator<Film>('films'),
      takeUntil(this.destroy$)
    );

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
