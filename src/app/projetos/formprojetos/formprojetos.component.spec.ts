/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormprojetosComponent } from './formprojetos.component';

describe('FormprojetosComponent', () => {
  let component: FormprojetosComponent;
  let fixture: ComponentFixture<FormprojetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormprojetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormprojetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
