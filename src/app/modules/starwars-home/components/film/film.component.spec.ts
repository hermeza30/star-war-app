import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/components/card/card.component';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmComponent, HttpClientModule, CardComponent],
      providers: [StarWarsServiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
