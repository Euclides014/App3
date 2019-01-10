/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeuperfilComponent } from './meuperfil.component';

describe('MeuperfilComponent', () => {
  let component: MeuperfilComponent;
  let fixture: ComponentFixture<MeuperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
