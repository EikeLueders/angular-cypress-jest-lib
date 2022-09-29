/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressjestLibComponent } from './cypressjest-lib.component';

describe('CypressjestLibComponent', () => {
  let component: CypressjestLibComponent;
  let fixture: ComponentFixture<CypressjestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CypressjestLibComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CypressjestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressjestLibComponent } from './cypressjest-lib.component';

describe('CypressjestLibComponent', () => {
  let component: CypressjestLibComponent;

  beforeEach(() => {
    component = new CypressjestLibComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
