/*
import { TestBed } from '@angular/core/testing';

import { CypressjestLibService } from './cypressjest-lib.service';

describe('CypressjestLibService', () => {
  let service: CypressjestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CypressjestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/

import { TestBed } from '@angular/core/testing';

import { CypressjestLibService } from './cypressjest-lib.service';

describe('CypressjestLibService', () => {
  let service: CypressjestLibService;

  beforeEach(() => {
    service =new CypressjestLibService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
