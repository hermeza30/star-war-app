import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardComponent,
        PeopleComponent,
        HttpClientModule,
        SpinnerComponent,
      ],
      providers: [StarWarsServiceService, SpinnerService],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
