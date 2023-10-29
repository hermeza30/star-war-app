import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/components/card/card.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FilmComponent,
        HttpClientModule,
        CardComponent,
        SpinnerComponent,
      ],
      providers: [StarWarsServiceService, SpinnerService],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
