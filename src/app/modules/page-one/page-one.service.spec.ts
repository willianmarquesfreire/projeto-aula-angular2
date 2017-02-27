import { TestBed, inject } from '@angular/core/testing';

import { PageOneService } from './page-one.service';

describe('PageOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageOneService]
    });
  });

  it('should ...', inject([PageOneService], (service: PageOneService) => {
    expect(service).toBeTruthy();
  }));
});
