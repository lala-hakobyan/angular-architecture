import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CartSignalBasket } from './cart-signal-basket';

describe('CartBasket', () => {
  let component: CartSignalBasket;
  let fixture: ComponentFixture<CartSignalBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignalBasket],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignalBasket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
