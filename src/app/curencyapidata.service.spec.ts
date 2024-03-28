import { TestBed } from '@angular/core/testing';

import { CurencyapidataService } from './curencyapidata.service';

describe('CurencyapidataService', () => {
  let service: CurencyapidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurencyapidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
