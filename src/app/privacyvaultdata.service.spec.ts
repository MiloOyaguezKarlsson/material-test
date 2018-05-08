import { TestBed, inject } from '@angular/core/testing';

import { PrivacyvaultdataService } from './privacyvaultdata.service';

describe('PrivacyvaultdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivacyvaultdataService]
    });
  });

  it('should be created', inject([PrivacyvaultdataService], (service: PrivacyvaultdataService) => {
    expect(service).toBeTruthy();
  }));
});
