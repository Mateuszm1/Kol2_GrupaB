import { TestBed } from '@angular/core/testing';

import { MWDataService } from './mw-data.service';

describe('MWDataService', () => {
  let service: MWDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MWDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
