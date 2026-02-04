import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CartBasket } from './cart-basket';

describe('CartBasket', () => {
  let component: CartBasket;
  let fixture: ComponentFixture<CartBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBasket],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBasket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
