import { TestBed } from '@angular/core/testing';

import { FlowbiteConfigService } from './flowbite-config.service';

describe('FlowbiteConfigService', () => {
  let service: FlowbiteConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowbiteConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
