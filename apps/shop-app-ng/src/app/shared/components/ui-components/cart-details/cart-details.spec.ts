import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CartDetails } from './cart-details';

describe('CartDetails', () => {
  let component: CartDetails;
  let fixture: ComponentFixture<CartDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDetails],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
