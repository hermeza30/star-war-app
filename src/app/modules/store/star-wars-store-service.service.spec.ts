import { TestBed } from '@angular/core/testing';

import { StarWarsStoreServiceService } from './star-wars-store-service.service';

describe('StarWarsStoreServiceService', () => {
  let service: StarWarsStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarWarsStoreServiceService],
    });
    service = TestBed.inject(StarWarsStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
