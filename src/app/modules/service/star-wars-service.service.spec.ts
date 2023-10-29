import { TestBed } from '@angular/core/testing';

import { StarWarsServiceService } from './star-wars-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('StarWarsServiceService', () => {
  let service: StarWarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StarWarsServiceService],
    });
    service = TestBed.inject(StarWarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
