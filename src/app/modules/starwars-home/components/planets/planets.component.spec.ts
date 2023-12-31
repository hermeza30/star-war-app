import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsComponent } from './planets.component';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlanetsComponent,
        CardComponent,
        HttpClientModule,
        SpinnerComponent,
      ],
      providers: [StarWarsServiceService, SpinnerService],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
