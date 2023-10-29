import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import { StarWarsServiceService } from 'src/app/modules/service/star-wars-service.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VehicleComponent,
        CardComponent,
        HttpClientModule,
        SpinnerComponent,
      ],
      providers: [StarWarsServiceService, SpinnerService],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
