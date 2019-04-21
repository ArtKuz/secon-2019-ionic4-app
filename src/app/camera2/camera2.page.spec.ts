import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Camera2Page } from './camera2.page';

describe('Camera2Page', () => {
  let component: Camera2Page;
  let fixture: ComponentFixture<Camera2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Camera2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Camera2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
