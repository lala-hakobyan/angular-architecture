import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { CartSignal } from './cart-signal';

describe('CartSignal', () => {
  let component: CartSignal;
  let fixture: ComponentFixture<CartSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignal],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
