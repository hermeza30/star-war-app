import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsHomeComponent } from './starwars-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SpinnerService } from 'src/app/modules/service/spinner.service';

describe('StarwarsHomeComponent', () => {
  let component: StarwarsHomeComponent;
  let fixture: ComponentFixture<StarwarsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarwarsHomeComponent],
      imports: [RouterTestingModule, NavbarComponent],
      providers: [SpinnerService],
    }).compileComponents();

    fixture = TestBed.createComponent(StarwarsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
