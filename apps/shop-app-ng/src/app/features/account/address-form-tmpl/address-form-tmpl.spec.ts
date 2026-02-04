import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { AddressFormTmpl } from './address-form-tmpl';

describe('AddressFormTmpl', () => {
  let component: AddressFormTmpl;
  let fixture: ComponentFixture<AddressFormTmpl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormTmpl],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormTmpl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
